export async function deliverMessage(message: string) {
  await new Promise((res) => setTimeout(res, 200));
  // simulating error
  if (Math.random() < 0.5) {
    throw new Error("Kaboomm!!!!");
  }
  return message;
}
