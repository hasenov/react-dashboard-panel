import { BrowserRouter } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import "simplebar-react/dist/simplebar.min.css";
import BlurState from "./context/blur/BlurState";
import Content from "./components/Content";

function App() {
	return (
		<BlurState>
			<BrowserRouter>
				<div className="container flex h-full flex-col lg:relative lg:block lg:py-12">
					<div className="absolute top-12 right-[17px] hidden h-[18px] w-7 rounded-3xl bg-primary lg:block"></div>
					<div className="flex flex-auto flex-col-reverse justify-between lg:h-full lg:flex-row lg:justify-start lg:overflow-hidden lg:rounded-4xl lg:bg-vampire-black/20 lg:backdrop-blur-4xl">
						<div className="scrollbar w-full lg:flex lg:w-auto lg:max-w-[25%] lg:shrink-0 lg:grow-0 lg:basis-1/4 lg:flex-col lg:overflow-y-auto">
							<Sidebar />
						</div>
						<div className="w-full lg:flex lg:w-auto lg:max-w-[75%] lg:shrink-0 lg:grow-0 lg:basis-3/4 lg:flex-col">
							<Content />
						</div>
					</div>
				</div>
			</BrowserRouter>
		</BlurState>
	);
}

export default App;
