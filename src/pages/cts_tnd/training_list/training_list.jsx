
import tndTrainingList from "../../../data/tndTrainingList";
import Search from "./components/search";

export default function TrainingList() {
    return (
        <>
           <Search labelName={"Search using name/staff number"} details={tndTrainingList} />
        </>
    );
}