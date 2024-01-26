interface Props {
  multa?: Multa[];
}

const MultaCard = ({ multa }: Props) => {
  console.log(multa);

  return <article className="border border-border w-full">Multa</article>;
};

export default MultaCard;
