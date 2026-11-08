import type {
  CreateOrderResult,
  FulfillResult,
  OpenResult,
  SaveMockResult,
  SavePracticeResult,
} from "./ledger";
import type { StudyState } from "./types";

export type StoreFailure = { ok: false; reason: "storage_unconfigured" | "storage_error" };

export type LoadResult = { ok: true; state: StudyState } | StoreFailure;

export interface LanguageStudyStore {
  load(userId: string): Promise<LoadResult>;
  savePractice(
    input: Parameters<typeof import("./ledger").savePracticeSubmission>[1]
  ): Promise<SavePracticeResult | StoreFailure>;
  openItem(
    input: Parameters<typeof import("./ledger").openPaidItem>[1]
  ): Promise<OpenResult | StoreFailure>;
  saveMock(
    input: Parameters<typeof import("./ledger").saveMockSubmission>[1]
  ): Promise<SaveMockResult | StoreFailure>;
  createOrder(
    input: Parameters<typeof import("./ledger").createPendingOrder>[1]
  ): Promise<CreateOrderResult | StoreFailure>;
  attachSession(
    orderId: string,
    sessionId: string,
    url: string
  ): Promise<{ ok: true } | StoreFailure>;
  fulfill(input: Parameters<typeof import("./ledger").fulfillOrder>[1]): Promise<
    FulfillResult | StoreFailure
  >;
}
