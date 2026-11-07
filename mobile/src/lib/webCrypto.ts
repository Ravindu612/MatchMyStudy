import * as ExpoCrypto from "expo-crypto";

/**
 * Supabase PKCE hashes the code verifier with crypto.subtle.digest.
 * Hermes does not always provide WebCrypto, so fill in SHA-256 from expo-crypto.
 */
export function installWebCrypto(): void {
  const root = globalThis as typeof globalThis & { crypto?: Crypto };
  if (!root.crypto) {
    root.crypto = {} as Crypto;
  }

  const current = root.crypto;
  if (typeof current.subtle?.digest === "function") {
    return;
  }

  const digest = async (
    algorithm: AlgorithmIdentifier,
    data: BufferSource
  ): Promise<ArrayBuffer> => {
    const name = typeof algorithm === "string" ? algorithm : algorithm.name;
    if (name !== "SHA-256") {
      throw new Error(`Unsupported digest ${name}`);
    }

    const bytes =
      data instanceof ArrayBuffer
        ? new Uint8Array(data)
        : new Uint8Array(data.buffer, data.byteOffset, data.byteLength);

    return ExpoCrypto.digest(ExpoCrypto.CryptoDigestAlgorithm.SHA256, bytes);
  };

  const subtle = { digest } as SubtleCrypto;

  const mutable = current as { subtle?: SubtleCrypto };
  try {
    Object.defineProperty(mutable, "subtle", {
      configurable: true,
      value: subtle,
    });
  } catch {
    mutable.subtle = subtle;
  }
}
