"use client";
import { useActionState, useOptimistic, useRef } from "react";
import { Form } from "./Form";
import { ThreadList } from "./ThreadList";

type State = {
  text: string;
  sending: boolean;
};

type ThreadProps = {
  sendMessage: (formData: FormData) => Promise<string>;
};

export function Thread({ sendMessage }: ThreadProps) {
  const formRef = useRef<HTMLFormElement>(null);

  const [state, formAction, isPending] = useActionState(
    async (prevState: State[], formData: FormData) => {
      try {
        const msg = String(formData.get("message"));
        addOptimisticMessage([...prevState, { text: msg, sending: true }]);
        formRef.current?.reset();
        // actual api call here
        const newMsg = await sendMessage(formData);
        return [...prevState, { text: newMsg, sending: false, error: null }];
      } catch (error: unknown) {
        if (error instanceof Error) {
          const { message } = error;
          alert(message);
        }
        addOptimisticMessage([...prevState]);
        return [...prevState];
      }
    },
    [],
  );

  const [optimisticMessages, addOptimisticMessage] = useOptimistic(state);
  return (
    <>
      <Form formAction={formAction} formRef={formRef} pending={isPending} />
      {optimisticMessages.map((message, index) => (
        <ThreadList text={message.text} sending={message.sending} key={index} />
      ))}
    </>
  );
}
