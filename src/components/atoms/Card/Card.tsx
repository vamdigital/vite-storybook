export const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col justify-start w-72 gap-3 rounded-lg p-4 bg-white text-slate-500 drop-shadow-lg ">
      {children}
    </div>
  );
};

export const CardImage = () => {
  return <div className="flex w-full h-36 bg-gray-500"></div>;
};

export const CardBadge = ({ cardBadge }: { cardBadge: string }) => {
  return (
    <div className="py-1 px-2 text-sm rounded-md text-slate-900 font-semibold bg-yellow-500 w-fit">
      {cardBadge}
    </div>
  );
};

export const CardPubDate = ({ cardPubDate }: { cardPubDate: string }) => {
  return (
    <div className="tracking-tight text-left text-sm text-slate-900">
      {cardPubDate}
    </div>
  );
};

export const CardTitle = ({ cardTitle }: { cardTitle: string }) => {
  return (
    <div className="font-bold text-xl text-left text-slate-900">
      {cardTitle}
    </div>
  );
};

export const CardContent = ({
  cardContent,
}: {
  cardContent: React.ReactNode;
}) => {
  return (
    <div className="text-slate-500 text-md text-left tracking-tight">
      {cardContent}
    </div>
  );
};

export const CardAvatar = ({ avatarName }: { avatarName: string }) => {
  return (
    <div className="flex items-center gap-2">
      <div className="flex w-5 h-5 bg-slate-700 rounded-full"></div>
      <div className="flex font-bold text-md">{avatarName}</div>
    </div>
  );
};

Card.Image = CardImage;
Card.Badge = CardBadge;
Card.PubDate = CardPubDate;
Card.Title = CardTitle;
Card.Content = CardContent;
Card.Avatar = CardAvatar;
