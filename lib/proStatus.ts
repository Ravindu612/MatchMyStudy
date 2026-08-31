export function isConsultantProActive(
  consultant: {
    is_pro?: boolean | null;
    pro_expires_at?: string | null;
  }
) {
  if (consultant.is_pro !== true) {
    return false;
  }

  if (!consultant.pro_expires_at) {
    return true;
  }

  return (
    new Date(consultant.pro_expires_at).getTime() >
    Date.now()
  );
}