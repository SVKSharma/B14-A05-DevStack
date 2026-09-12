import { RxCross2 } from "react-icons/rx";
import type { DevStackType } from "../types/DevStackType";
import type { Dispatch, SetStateAction } from "react";
import { toast } from "react-toastify";

interface AddedDevStackListProps {
  devStackList: DevStackType[];
  setDevStackList: Dispatch<SetStateAction<DevStackType[]>>;
}

export const AddedDevStackList = ({devStackList,setDevStackList}: AddedDevStackListProps) => {
  const handelRemove = (id: string) => {
    const stack = devStackList.find((eachStack) => eachStack.id === id);
    if (stack) {
      setDevStackList(devStackList.filter((eachStack) => eachStack.id !== id));
      toast.info(`${stack.name} removed from the DevStack!`);
    }
  };

  const handelRemoveAll = ()=>{
    if(devStackList.length>0){
      setDevStackList([]);
      toast.info("All DevStacks are cleared!")
    }
  }

  return (
    <div className="card w-full rounded-2xl border border-slate-200 bg-base-100 p-6 shadow-sm lg:sticky lg:top-24">
      <h3 className="text-lg font-bold text-slate-900">Your Stack</h3>
      <p className="mt-1 text-sm text-slate-400">
        {devStackList.length} Technology Selected
      </p>

      {devStackList.length === 0 ? (
        <div className="mt-6 flex flex-col items-center justify-center rounded-xl border border-dashed border-slate-200 px-4 py-10 text-center">
          <p className="text-sm text-slate-400">No technologies selected yet</p>
          <p className="mt-1 text-xs text-slate-300">Your stack is empty</p>
        </div>
      ) : (
        <div className="mt-4 flex flex-col gap-3">
          {devStackList.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between rounded-xl border border-slate-100 px-4 py-3"
            >
              <div className="flex items-center gap-3">
                <img src={item.icon} alt={item.name} className="h-6 w-6" />
                <div>
                  <p className="text-sm font-semibold text-slate-800">
                    {item.name}
                  </p>
                  <p className="text-xs text-slate-400">{item.category}</p>
                </div>
              </div>
              <button
                onClick={() => handelRemove(item.id)}
                className="text-2xl text-slate-300 hover:text-slate-500"
              >
                <RxCross2/>
              </button>
            </div>
          ))}
        </div>
      )}

      {devStackList.length > 0 && (
        <button
          onClick={()=>handelRemoveAll()}
          className="btn btn-outline font-bold btn-error mt-6 w-full rounded-lg border-slate-200 text-red-500 hover:bg-red-50 hover:border-red-500"
        >
          Remove All
        </button>
      )}
    </div>
  );
};