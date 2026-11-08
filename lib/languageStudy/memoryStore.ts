import {
  createPendingOrder,
  fulfillOrder,
  openPaidItem,
  saveMockSubmission,
  savePracticeSubmission,
} from "./ledger";
import type { LanguageStudyStore } from "./store";
import { emptyStudyState, type StudyState } from "./types";

/**
 * In-memory store for tests and for the pure allowance rules.
 * It is not a fallback for production. Signed-in practice uses Supabase.
 */
export class MemoryLanguageStudyStore implements LanguageStudyStore {
  state: StudyState = emptyStudyState();

  async load(userId: string) {
    return {
      ok: true as const,
      state: {
        attempts: this.state.attempts.filter((attempt) => attempt.userId === userId),
        ledger: this.state.ledger.filter((entry) => entry.userId === userId),
        orders: this.state.orders.filter((order) => order.userId === userId),
      },
    };
  }

  async savePractice(input: Parameters<typeof savePracticeSubmission>[1]) {
    const result = savePracticeSubmission(this.state, input);

    if (result.ok) {
      this.state = result.state;
    }

    return result;
  }

  async openItem(input: Parameters<typeof openPaidItem>[1]) {
    const result = openPaidItem(this.state, input);

    if (result.ok) {
      this.state = result.state;
    }

    return result;
  }

  async saveMock(input: Parameters<typeof saveMockSubmission>[1]) {
    const result = saveMockSubmission(this.state, input);

    if (result.ok || result.reason === "expired") {
      if (result.state) {
        this.state = result.state;
      }
    }

    return result;
  }

  async createOrder(input: Parameters<typeof createPendingOrder>[1]) {
    const result = createPendingOrder(this.state, input);

    if (result.ok) {
      this.state = result.state;
    }

    return result;
  }

  async attachSession(orderId: string, sessionId: string, url: string) {
    const order = this.state.orders.find((item) => item.id === orderId);

    if (!order) {
      return { ok: false as const, reason: "storage_error" as const };
    }

    order.stripeCheckoutSessionId = sessionId;
    order.checkoutUrl = url;

    return { ok: true as const };
  }

  async fulfill(input: Parameters<typeof fulfillOrder>[1]) {
    const result = fulfillOrder(this.state, input);

    if (result.ok) {
      this.state = result.state;
    }

    return result;
  }
}
