import { RefObject } from "react";

type FormProp = {
  formAction: (payload: FormData) => void;
  formRef: RefObject<HTMLFormElement | null> | null;
  pending: boolean;
};

export const Form = ({ formAction, formRef, pending }: FormProp) => {
  return (
    <form
      action={formAction}
      ref={formRef}
      className="flex flex-col gap-1 w-full"
    >
      <div className="flex">
        <input
          type="text"
          name="message"
          readOnly={pending}
          placeholder="Hello!"
          className="h-11 p-4 bg-slate-200 w-full text-slate-700"
        />
        <button
          type="submit"
          disabled={pending}
          className="p-2 text-sm rounded-none"
        >
          Send
        </button>
      </div>
    </form>
  );
};
