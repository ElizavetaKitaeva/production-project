import Loader from "shared/ui/Loader/Loader";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./PageLoader.module.scss";

interface PageLoaderProps {
  className?: string;
}

const PageLoader = ({ className }: PageLoaderProps) => (
  <div className={classNames(cls.PageLoader, {}, [className])}>
    <Loader />
  </div>
);

export default PageLoader;
