import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import { FastAverageColor } from "fast-average-color";
import type { DevStackType } from "../../types/DevStackType"; 
import { TiStarFullOutline} from "react-icons/ti";
import { toast } from "react-toastify";
import { FaCheckCircle } from "react-icons/fa";

const fac = new FastAverageColor();

const getIconColor = async (iconSrc: string): Promise<string> => {
  try {
    const color = await fac.getColorAsync(iconSrc, { crossOrigin: "anonymous" });
    return color.hex;
  } catch {
    return "#64748b"; 
  }
};

interface StackCardProps {
  stack: DevStackType;
  devStackList: DevStackType[];
  setDevStackList: Dispatch<SetStateAction<DevStackType[]>>;
  isSelected: boolean;
}

export const StackCard = ({ stack, devStackList, setDevStackList, isSelected}: StackCardProps) => {
  const { id, name, category, description, icon, rating, difficulty, badge } =
    stack;

  const [badgeColor, setBadgeColor] = useState("#64748b");
  useEffect(() => {
    getIconColor(icon).then(setBadgeColor);
  }, [icon]);

  const handelAddToDevStack = (id: string) => {
    if(devStackList.some((eachStack) => eachStack.id === id)){
      toast.error(`${stack.name} has already been added to your stack.`);
    }else if(!devStackList.some((eachStack) => eachStack.id === id)) {
      setDevStackList([...devStackList, stack]);
      toast.success(`${stack.name} has been added to your stack.`);
    }
  }

  return (
    <div
      className={`card w-full rounded-2xl border bg-base-100 shadow-sm ${
        isSelected ? "border-pink-500" : "border-slate-200"
      }`}
    >
      <div className="card-body gap-3 p-6">
        {/*Icon and badge*/}
        <div className="flex items-start justify-between">
          <img
            src={icon}
            alt={name}
            crossOrigin="anonymous"
            className="h-8 w-8 object-contain"
          />
          {badge && (
            <span
              className="badge border-none px-3 py-3 text-xs font-medium"
              style={{ backgroundColor: `${badgeColor}1A`, color: badgeColor }}
            >
              {badge}
            </span>
          )}
        </div>

        {/*Name and description*/}
        <h2 className="card-title text-lg font-bold text-slate-900">{name}</h2>
        <p className="text-sm leading-relaxed text-slate-500">{description}</p>

        {/* Category, difficulty, rating */}
        <div className="card-actions mt-1 items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="badge badge-ghost border-none bg-slate-100 px-3 py-3 text-xs font-medium text-slate-600">
              {category}
            </span>
            <span className="text-xs text-slate-400">{difficulty}</span>
          </div>
          <span className="flex items-center gap-1 text-sm font-medium text-slate-700">
            <TiStarFullOutline className="text-amber-400" />
            {rating.toFixed(1)}
          </span>
        </div>

        {/*Add to stack button*/}
        <button
          onClick={() => !isSelected && handelAddToDevStack(id)}
          className={`btn mt-3 w-full rounded-lg border-none text-white ${
            isSelected
              ? "cursor-not-allowed bg-pink-600 hover:bg-pink-600"
              : "bg-slate-900 hover:bg-slate-800"
          }`}
        >
          {isSelected ? (
            <span className="flex items-center font-bold justify-center gap-1">
              <FaCheckCircle/> Added
            </span>
          ) : (
            "Add to Stack"
          )}
        </button>
      </div>
    </div>
  );
};