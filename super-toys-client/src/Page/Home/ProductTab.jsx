import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useToys from '../../hooks/useToys';
import ToysCard from '../../Share/ToysCard';

const ProductTab = () => {
    const [toys,loading]= useToys();
    const marvel = toys.filter(toy => toy.categories === "Marvel")
    const dc = toys.filter(toy => toy.categories === "DC")
    const transformers = toys.filter(toy => toy.categories === "Transformers")
    
    if(loading){
        return <button className="btn loading">loading</button>
    }
    else
    {
        return (
            <Tabs className="card bg-blue-50 shadow-inner text-primary-content w-[80%] mx-auto p-10 my-20">
            <TabList className="text-center flex gap-4 justify-center">
                <Tab className="btn btn-outline blue-light bg-white">All Toys</Tab>
                <Tab className="btn btn-outline blue-light bg-white" >Marvel</Tab>
                <Tab className="btn btn-outline blue-light bg-white" >DC</Tab>
                <Tab className="btn btn-outline blue-light bg-white" >Transformers</Tab>
            </TabList>
    
            
            <TabPanel >
                <div  className="grid md:grid-cols-3  ">
                {
                    toys.map(toy => <ToysCard toy={toy} key ={toy._id} ></ToysCard>)
                }
                </div>
            </TabPanel>
            <TabPanel  >
                <div className="grid md:grid-cols-3">
                {
                    marvel.map(toy => <ToysCard toy={toy} key ={toy._id} ></ToysCard>)
                }
                </div>
            </TabPanel>
            <TabPanel>
                <div  className="grid md:grid-cols-3  ">
                {
                    dc.map(toy => <ToysCard toy={toy} key ={toy._id} ></ToysCard>)
                }
                </div>
            </TabPanel>
            <TabPanel>
                <div className="grid md:grid-cols-3 ">
                    {
                        transformers.map(toy => <ToysCard toy={toy} key ={toy._id}></ToysCard>)
                    }
                </div>
            </TabPanel>
           
            
        </Tabs>
        );
    }
};

export default ProductTab;