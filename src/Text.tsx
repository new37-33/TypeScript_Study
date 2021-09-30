import { VFC } from "react";

type Props = {
  color: string;
  fontSize: string;
};

export const Text: VFC<Props> = (props) => {
  const { color, fontSize } = props;
  //{ color: color, fontSize: fontSize }と同義。
  // 同じ名前は省略できる
  return <p style={{ color, fontSize }}>テキストです</p>;
};
