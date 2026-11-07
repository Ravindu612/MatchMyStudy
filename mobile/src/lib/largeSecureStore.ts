import AsyncStorage from "@react-native-async-storage/async-storage";
import aesjs from "aes-js";
import * as SecureStore from "expo-secure-store";

const secureOptions: SecureStore.SecureStoreOptions = {
  keychainAccessible: SecureStore.WHEN_UNLOCKED,
};

/**
 * A Supabase session is larger than the value SecureStore can keep (about 2 KB).
 * The AES-256 key lives in SecureStore. The encrypted session lives in AsyncStorage.
 * This is the storage adapter from the Supabase Expo guide.
 */
export class LargeSecureStore {
  async getItem(key: string): Promise<string | null> {
    try {
      const encrypted = await AsyncStorage.getItem(key);
      if (!encrypted) {
        return encrypted;
      }

      return await this.decrypt(key, encrypted);
    } catch {
      await this.removeItem(key);
      return null;
    }
  }

  async setItem(key: string, value: string): Promise<void> {
    const encrypted = await this.encrypt(key, value);
    await AsyncStorage.setItem(key, encrypted);
  }

  async removeItem(key: string): Promise<void> {
    await AsyncStorage.removeItem(key);
    try {
      await SecureStore.deleteItemAsync(secureKey(key), secureOptions);
    } catch {
      // The key is already gone, or this platform has no keychain.
    }
  }

  private async encrypt(key: string, value: string): Promise<string> {
    const encryptionKey = crypto.getRandomValues(new Uint8Array(32));
    const cipher = new aesjs.ModeOfOperation.ctr(
      encryptionKey,
      new aesjs.Counter(1)
    );
    const encryptedBytes = cipher.encrypt(aesjs.utils.utf8.toBytes(value));
    await SecureStore.setItemAsync(
      secureKey(key),
      aesjs.utils.hex.fromBytes(encryptionKey),
      secureOptions
    );
    return aesjs.utils.hex.fromBytes(encryptedBytes);
  }

  private async decrypt(key: string, value: string): Promise<string | null> {
    const encryptionKeyHex = await SecureStore.getItemAsync(
      secureKey(key),
      secureOptions
    );
    if (!encryptionKeyHex) {
      return null;
    }

    const cipher = new aesjs.ModeOfOperation.ctr(
      aesjs.utils.hex.toBytes(encryptionKeyHex),
      new aesjs.Counter(1)
    );
    const decryptedBytes = cipher.decrypt(aesjs.utils.hex.toBytes(value));
    return aesjs.utils.utf8.fromBytes(decryptedBytes);
  }
}

function secureKey(key: string): string {
  return `mms.${key.replace(/[^A-Za-z0-9._-]/g, "_")}`;
}
