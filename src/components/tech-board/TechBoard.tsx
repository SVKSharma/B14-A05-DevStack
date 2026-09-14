import { use, useState } from "react";
import type { DevStackType } from "../../types/DevStackType";
import { StackCard } from "./StackCard";
import { AddedDevStackList } from "./YourStack";

interface DevBoardType{
  devStackData:Promise<DevStackType[]>;
}

export const TechBoard = ({devStackData}: DevBoardType) => {
  const devStacks = use(devStackData);
  const [devStackList, setDevStackList] = useState<DevStackType[]>([])

  return (
    <section className="border-b border-slate-100 mb-10 pb-30">
      <div className="keep-content-center">
        <div className="mb-10">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Explore the{" "}
            <span className="bg-linear-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          <p className="mt-3 text-base text-slate-500 sm:text-lg">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
          {/* Left: card grid */}
          <div className="grid flex-1 grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {devStacks.map((stack) => (
              <StackCard key={stack.id} stack={stack} devStackList={devStackList} setDevStackList={setDevStackList} isSelected={devStackList.some((eachStack) => eachStack.id === stack.id)}/>
            ))}
          </div>

          {/* Right: added list */}
          <div className="w-full lg:w-80 lg:shrink-0">
            <AddedDevStackList devStackList={devStackList} setDevStackList={setDevStackList}/>
          </div>
        </div>
      </div>
    </section>
  );
};
