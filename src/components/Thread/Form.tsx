import { RefObject, startTransition } from "react";

type FormProp = {
  formAction: (payload: FormData) => void;
  formRef: RefObject<HTMLFormElement | null> | null;
  pending: boolean;
};

export const Form = ({ formAction, formRef, pending }: FormProp) => {
  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    startTransition(() => {
      formAction(formData);
    });
  };
  return (
    <form
      ref={formRef}
      onSubmit={submitHandler}
      //action={formAction}
      className="flex flex-col gap-1 w-full"
    >
      <div className="flex">
        <input
          type="text"
          name="message"
          readOnly={pending}
          placeholder={pending ? "wait... processing" : "type it on"}
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
