import { ReactElement, Children, isValidElement } from "react";
// Defining Types of allowed child component
type CardImageProps = { text?: string };

type CardBadgeProps = {
  cardBadge: string;
};

type CardPubDateProps = {
  cardPubDate: string;
};

type CardTitleProps = {
  cardTitle: string;
};

type CardAvatarProps = {
  avatarName: string;
};

type CardContentProps = {
  cardContent: React.ReactNode;
};

// The Card Component
type CardProps = {
  children:
    | ReactElement<CardImageProps>
    | ReactElement<CardBadgeProps>
    | ReactElement<CardPubDateProps>
    | ReactElement<CardTitleProps>
    | ReactElement<CardAvatarProps>
    | ReactElement<CardContentProps>
    | (
        | ReactElement<CardImageProps>
        | ReactElement<CardBadgeProps>
        | ReactElement<CardPubDateProps>
        | ReactElement<CardTitleProps>
        | ReactElement<CardAvatarProps>
        | ReactElement<CardContentProps>
      )[];
};

export const Card = ({ children }: CardProps) => {
  // Runtime validation
  Children.forEach(children, (child) => {
    if (
      !isValidElement(child) ||
      (child.type !== CardImage &&
        child.type !== CardTitle &&
        child.type !== CardBadge &&
        child.type !== CardPubDate &&
        child.type !== CardAvatar &&
        child.type !== CardContent)
    ) {
      throw new Error(
        "👻 Card component only accepts certain components as children",
      );
    }
  });
  return (
    <div className="flex flex-col justify-start w-72 gap-3 rounded-lg p-4 bg-white text-slate-500 drop-shadow-lg ">
      {children}
    </div>
  );
};

export const CardImage = ({ text }: CardImageProps) => {
  return <div className="flex w-full h-36 bg-gray-500">{text}</div>;
};

export const CardBadge = ({ cardBadge }: CardBadgeProps) => {
  return (
    <div className="py-1 px-2 text-sm rounded-md text-slate-900 font-semibold bg-yellow-500 w-fit">
      {cardBadge}
    </div>
  );
};

export const CardPubDate = ({ cardPubDate }: CardPubDateProps) => {
  return (
    <div className="tracking-tight text-left text-sm text-slate-900">
      {cardPubDate}
    </div>
  );
};

export const CardTitle = ({ cardTitle }: CardTitleProps) => {
  return (
    <div className="font-bold text-xl text-left text-slate-900">
      {cardTitle}
    </div>
  );
};

export const CardContent = ({ cardContent }: CardContentProps) => {
  return (
    <div className="text-slate-500 text-md text-left tracking-tight">
      {cardContent}
    </div>
  );
};

export const CardAvatar = ({ avatarName }: CardAvatarProps) => {
  return (
    <div className="flex items-center gap-2">
      <div className="flex w-5 h-5 bg-slate-700 rounded-full"></div>
      <div className="flex font-bold text-md">{avatarName}</div>
    </div>
  );
};

// Add displayNames to help with runtime validation

CardImage.displayName = "CardImage";
CardTitle.displayName = "CardTitle";
CardBadge.displayName = "CardBadge";
CardPubDate.displayName = "CardPubDate";
CardAvatar.displayName = "CardAvatar";
CardContent.displayName = "CardContent";

Card.Image = CardImage;
Card.Badge = CardBadge;
Card.PubDate = CardPubDate;
Card.Title = CardTitle;
Card.Content = CardContent;
Card.Avatar = CardAvatar;
