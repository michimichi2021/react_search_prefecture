import "./styles.css";
import { useState } from "react";

export default function App() {
  const prefectures = [
    "北海道",
    "青森",
    "岩手",
    "宮城",
    "秋田",
    "山形",
    "福島",
    "茨城",
    "栃木",
    "群馬",
    "埼玉",
    "千葉",
    "東京",
    "神奈川",
    "新潟",
    "富山",
    "石川",
    "福井",
    "山梨",
    "長野",
    "岐阜",
    "静岡",
    "愛知",
    "三重",
    "滋賀",
    "京都",
    "大阪",
    "兵庫",
    "奈良",
    "和歌山",
    "鳥取",
    "島根",
    "岡山",
    "広島",
    "山口",
    "徳島",
    "香川",
    "愛媛",
    "高知",
    "福岡",
    "佐賀",
    "長崎",
    "熊本",
    "大分",
    "宮崎",
    "鹿児島",
    "沖縄"
  ];

  const [search, setSearch] = useState("");

  return (
    <div>
      <form action="">
        <input
          type="text"
          placeholder="都道府県を入力"
          onChange={(e) => setSearch(e.target.value)}
        />
        <br />
      </form>
      <ul>
        {prefectures
          .filter((output) => {
            if (!search) return true;
            return output === search;
          })
          .map((result, index) => {
            return <li key={index}>{result}</li>;
          })}
      </ul>
    </div>
  );
}
