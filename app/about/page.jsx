import Image from "next/image";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import js from "../../assets/js.png";
import ts from "../../assets/ts.png";
import node from "../../assets/node.png";
import php from "../../assets/php.png";
import java from "../../assets/java.png";
import react from "../../assets/react.png";
import vue from "../../assets/vue.png";
import jquery from "../../assets/jquery.png";
import nextjs from "../../assets/nextjs.png";
import nunjucks from "../../assets/nunjucks.png";
import tailwind from "../../assets/tailwind.png";
import mui from "../../assets/mui.png";
import shadcn from "../../assets/shadcn.png";
import story from "../../assets/story.png";
import sails from "../../assets/sails.png";
import mysql from "../../assets/mysql.png";
import mongo from "../../assets/mongo.png";
import linux from "../../assets/linux.png";
import slack from "../../assets/slack.png";
import teams from "../../assets/teams.png";
import git from "../../assets/git.png";
import github from "../../assets/github.png";
import gitlab from "../../assets/gitlab.png";
import backlog from "../../assets/backlog.png";
import figma from "../../assets/figma.png";
import namelogo from "../../assets/namelogo.png";

export default function About() {
  return (
    <div className="max-w-2xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-8 text-black">About me</h1>
      <Image
        src={namelogo}
        alt="ロゴ"
        width="full"
        height={150}
        priority
        className="w-full mb-10"
      />
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-2">経歴</h2>
        <ul className="list-none list-inside text-gray-700">
          <li>2021/11〜2022/1: 企業用Webサイト作成 フロントエンドエンジニア</li>
          <li>2022/2〜2022/7: 企業ECサイト開発 フロントエンドエンジニア</li>
          <li>2022/8〜2023/4: グルメサイト開発 フロントエンドエンジニア</li>
          <li>
            2023/5〜2024/4: 通信事業Webシステム開発
            フロントエンドエンジニア・サーバー
          </li>
          <li>
            2024/5〜2025/4: 企業向けCMSサービスの開発
            フロントエンドエンジニア・サーバー
          </li>
          <li>2025/5〜現在: 配膳システム開発 フロントエンドエンジニア</li>
        </ul>
      </section>
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-2">言語</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {/* サンプルスキルカード */}
          <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
            <Image src={html} alt="ロゴ" width={150} height={150} priority />
            <span className="text-sm font-medium">HTML</span>
            <span className="text-sm font-medium">実務3年</span>
          </div>
          <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
            <Image src={css} alt="ロゴ" width={150} height={150} priority />
            <span className="text-sm font-medium">css</span>
            <span className="text-sm font-medium">実務3年</span>
          </div>
          <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
            <Image
              src={js}
              alt="ロゴ"
              width={95}
              height={110}
              priority
              className="mb-3 mt-3"
            />
            <span className="text-sm font-medium">JavaScript</span>
            <span className="text-sm font-medium">実務3年</span>
          </div>
          <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
            <Image
              src={ts}
              alt="ロゴ"
              width={200}
              height={200}
              priority
              className="mb-4 mt-5"
            />
            <span className="text-sm font-medium">TypeScript</span>
            <span className="text-sm font-medium">実務2年</span>
          </div>
          <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
            <Image
              src={node}
              alt="ロゴ"
              width={100}
              height={100}
              priority
              className="mb-4"
            />
            <span className="text-sm font-medium">node.js</span>
            <span className="text-sm font-medium">実務2年</span>
          </div>
          <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
            <Image
              src={php}
              alt="ロゴ"
              width={150}
              height={150}
              priority
              className="mb-4 mt-3"
            />
            <span className="text-sm font-medium">php</span>
            <span className="text-sm font-medium">実務1年</span>
          </div>
          <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
            <Image
              src={java}
              alt="ロゴ"
              width={100}
              height={100}
              priority
              className="mb-4"
            />
            <span className="text-sm font-medium">java/spring boot</span>
            <span className="text-sm font-medium">自己学習1年</span>
          </div>
        </div>
      </section>
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-2">フレームワーク等</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
            <Image
              src={react}
              alt="ロゴ"
              width={100}
              height={100}
              priority
              className="mb-2"
            />
            <span className="text-sm font-medium">React</span>
            <span className="text-sm font-medium">実務2年</span>
          </div>
          <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
            <Image
              src={vue}
              alt="ロゴ"
              width={120}
              height={100}
              priority
              className="mb-2 mt-4"
            />
            <span className="text-sm font-medium">Vue</span>
            <span className="text-sm font-medium">実務1年</span>
          </div>
          <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
            <Image
              src={jquery}
              alt="ロゴ"
              width={100}
              height={100}
              priority
              className="mb-2 mt-4"
            />
            <span className="text-sm font-medium">jQuery</span>
            <span className="text-sm font-medium">実務2年</span>
          </div>
          <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
            <Image
              src={nextjs}
              alt="ロゴ"
              width={100}
              height={100}
              priority
              className="mb-2 mt-4"
            />
            <span className="text-sm font-medium">Next.js</span>
            <span className="text-sm font-medium">自己学習1年</span>
          </div>
          <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
            <Image
              src={sails}
              alt="ロゴ"
              width={100}
              height={100}
              priority
              className="mb-2 mt-4"
            />
            <span className="text-sm font-medium">sails.js</span>
            <span className="text-sm font-medium">実務1年</span>
          </div>
          <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
            <Image
              src={nunjucks}
              alt="ロゴ"
              width={100}
              height={100}
              priority
              className="mb-2 mt-4"
            />
            <span className="text-sm font-medium">nunjucks.js</span>
            <span className="text-sm font-medium">実務3ヵ月</span>
          </div>
          <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
            <Image
              src={tailwind}
              alt="ロゴ"
              width={100}
              height={100}
              priority
              className="mb-9 mt-8"
            />
            <span className="text-sm font-medium">TailwindCss</span>
            <span className="text-sm font-medium">実務1年</span>
          </div>
          <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
            <Image
              src={mui}
              alt="ロゴ"
              width={100}
              height={100}
              priority
              className="mb-2 mt-4"
            />
            <span className="text-sm font-medium">MUI</span>
            <span className="text-sm font-medium">実務1年</span>
          </div>
          <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
            <Image
              src={story}
              alt="ロゴ"
              width={80}
              height={100}
              priority
              className="mb-2 mt-2"
            />
            <span className="text-sm font-medium">storybook</span>
            <span className="text-sm font-medium">実務1年</span>
          </div>
          <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
            <Image
              src={shadcn}
              alt="ロゴ"
              width={80}
              height={100}
              priority
              className="mb-2 mt-4"
            />
            <span className="text-sm font-medium">shadcn</span>
            <span className="text-sm font-medium">自己学習1年</span>
          </div>
        </div>
      </section>
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-2">データベース</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
            <Image
              src={mysql}
              alt="ロゴ"
              width={100}
              height={100}
              priority
              className="mb-2 mt-4"
            />
            <span className="text-sm font-medium">MySQL</span>
            <span className="text-sm font-medium">実務1年</span>
          </div>
          <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
            <Image
              src={mongo}
              alt="ロゴ"
              width={100}
              height={100}
              priority
              className="mb-2 mt-4"
            />
            <span className="text-sm font-medium">mongoDB</span>
            <span className="text-sm font-medium">実務1年</span>
          </div>
          <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
            <Image
              src={linux}
              alt="ロゴ"
              width={50}
              height={50}
              priority
              className="mb-2 mt-4"
            />
            <span className="text-sm font-medium">linux</span>
            <span className="text-sm font-medium">実務1年</span>
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-2">ツール</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
            <Image
              src={slack}
              alt="ロゴ"
              width={50}
              height={50}
              priority
              className="mb-2 mt-4"
            />
            <span className="text-sm font-medium">Slack</span>
          </div>
          <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
            <Image
              src={teams}
              alt="ロゴ"
              width={50}
              height={50}
              priority
              className="mb-2 mt-2"
            />
            <span className="text-sm font-medium">Teams</span>
          </div>
          <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
            <Image
              src={git}
              alt="ロゴ"
              width={50}
              height={50}
              priority
              className="mb-2 mt-2"
            />
            <span className="text-sm font-medium">Git</span>
          </div>
          <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
            <Image
              src={github}
              alt="ロゴ"
              width={50}
              height={50}
              priority
              className="mb-2 mt-2"
            />
            <span className="text-sm font-medium">Github</span>
          </div>
          <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
            <Image
              src={gitlab}
              alt="ロゴ"
              width={50}
              height={50}
              priority
              className="mb-2 mt-2"
            />
            <span className="text-sm font-medium">GitLab</span>
          </div>
          <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
            <Image
              src={backlog}
              alt="ロゴ"
              width={50}
              height={50}
              priority
              className="mb-2 mt-2"
            />
            <span className="text-sm font-medium">Backlog</span>
          </div>
          <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
            <Image
              src={figma}
              alt="ロゴ"
              width={35}
              height={40}
              priority
              className="mb-2 mt-2"
            />
            <span className="text-sm font-medium">Figma</span>
          </div>
        </div>
      </section>
    </div>
  );
}
