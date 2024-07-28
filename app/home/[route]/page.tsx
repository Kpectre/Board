"use client";
import Image from "next/image";
import icon from "/public/icon.png";
import { CiSearch } from "react-icons/ci";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

const genre = [
  "全て見る",
  "ゲーム",
  "本・雑誌",
  "家電",
  "グッズ",
  "電子機器",
  "家具",
  "カード",
];

export default function Home() {
  const pathname = decodeURIComponent(usePathname());

  return (
    <div className="w-screen min-h-screen  bg-customGray flex flex-col items-center">
      {/* ヘッダー */}
      <header className="w-full h-28 bg-customGray border-b-[1px] border-gray-500 fixed flex flex-col justify-between items-center ">
        {/* ヘッダー上部 */}
        <div className=" w-[90%] mt-4 flex">
          {/* アイコン */}
          <Image className="w-32 h-10" src={icon} alt="アイコン" />
          {/* フォーム */}
          <form className="h-10 ml-6 flex items-center relative">
            <CiSearch className="text-2xl absolute top-2 left-1" />
            <input
              className="w-[500px] h-9 pl-8 border-[1px] border-black outline-none"
              type="text"
              placeholder="何をお探しですか？"
            />
          </form>
          {/* ボタン */}
          <div className="h-10 ml-96 flex items-center">
            <Button className="h-8">ログイン</Button>
            <Button className="h-8 ml-2">新規登録</Button>
          </div>
        </div>
        {/* ヘッダー下部 */}
        <div className="w-[960px] h-12 mr-64  bg-black flex">
          {genre.map((item) => {
            return (
              <Link
                href={`/home/${item}`}
                key={item}
                className={`h-full w-[120px] flex items-center justify-center bg-customGray text-gray-400 border-b-4 border-customGray rounded-[0px]  hover:bg-hoverdGray ${
                  pathname === `/home/${item}` &&
                  "text-red-600 border-b-4 border-red-600"
                }`}
              >
                {item}
              </Link>
            );
          })}
        </div>
      </header>

      <div id="grid" className="w-[750px]  bg-black  mt-32 mb-32">
        <div className="w-[150px] h-[190px] bg-red-600">sss</div>
        <div className="w-[150px] h-[190px] bg-red-600">sss</div>
        <div className="w-[150px] h-[190px] bg-red-600">sss</div>
        <div className="w-[150px] h-[190px] bg-red-600">sss</div>
        <div className="w-[150px] h-[190px] bg-red-600">sss</div>
        <div className="w-[150px] h-[190px] bg-red-600">sss</div>
        <div className="w-[150px] h-[190px] bg-red-600">sss</div>
        <div className="w-[150px] h-[190px] bg-red-600">sss</div>
        <div className="w-[150px] h-[190px] bg-red-600">sss</div>
        <div className="w-[150px] h-[190px] bg-red-600">sss</div>
        <div className="w-[150px] h-[190px] bg-red-600">sss</div>
      </div>
    </div>
  );
}
