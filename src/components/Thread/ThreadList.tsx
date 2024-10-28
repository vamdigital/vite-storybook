type Props = {
  text: string;
  sending: boolean;
};
export const ThreadList = ({ text, sending }: Props) => {
  return (
    <li className="text-slate-700">
      {text}
      {!!sending && <small>sending..</small>}
    </li>
  );
};
