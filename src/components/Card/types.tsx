export interface CardProps {
  clickCount: (id: number) => boolean | void;
  id: number;
  image: string;
}
