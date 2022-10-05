import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import styles from "./statisticResult.module.css";
import { Doughnut} from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { useMemo } from "react";

Chart.register(ArcElement, Tooltip, Legend);

const StatisticResult = () => {
    let {statistic} = useTypedSelector(state => state.bStatistic)
    const backgroundColor = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange', "Violet", "Grey"];
    const heaterColor: any = {"kominek" : "red", "harmony": "blue", "orchid": "green", "dove": "yellow", "village": "purple"}

    const generateLookingOrdersParams = (apiBStatistic: any): any => {
        let labels = Object.keys(apiBStatistic);
        const data = labels.map( (country: string) => {
            return apiBStatistic[country].ordersWithConfigProducts
        });
        let allOrders = 0;
        labels.forEach( country => allOrders += apiBStatistic[country].ordersWithConfigProducts);
        labels = labels.map( country => (`${country}(${(apiBStatistic[country].ordersWithConfigProducts * 100 / allOrders).toFixed(2)}%)`));
        return {
            labels,
            datasets: [{data, backgroundColor}]
        }
    }

    const generateLookingPcsParams = (apiBStatistic: any): any => {
        let heatersPcs = Object.keys(apiBStatistic).reduce( (prevObj: any, cur) => {
            const countryProducts = apiBStatistic[cur].products;
            const productsNamesArr = Object.keys(countryProducts);
            return productsNamesArr.reduce((obj, prodCurName) => {
                obj[prodCurName] ? obj[prodCurName] += countryProducts[prodCurName] : obj[prodCurName] = countryProducts[prodCurName]
                return obj
            }, prevObj)
        }, {})
        
        let data = Object.keys(heatersPcs).map( productName => heatersPcs[productName]);
        let heatersSum = getHeatersSum(data);
        let dataPercent = data.map( e =>  Number.parseFloat((e * 100 / heatersSum).toFixed(2))); 
        // console.log("New data",heatersPcs, data, heatersSum)
        //------------------------------
        let labels = Object.keys(heatersPcs);
        let colors = labels.map( product => heaterColor[product])
        labels = labels.map( (l, i) => `${l} - ${dataPercent[i]}%`)
        return {
            labels,
            datasets: [{data, backgroundColor: colors,}]
        }
    }

    const getHeatersSum = (heaters: any[]) => {
        return heaters.reduce( (prev, cur) => prev + cur, 0)
    }

    const generateProductChartsByCountry = (apiBStatistic: any): JSX.Element[] => {
        let labels = Object.keys(apiBStatistic);
        let result = labels.map((country: string) => {
            let countryObj = apiBStatistic[country];
            let productLabels = Object.keys(countryObj.products);
            let colors = productLabels.map( product => heaterColor[product])
            const data = productLabels.map( (product: string) => {
                return countryObj.products[product]
            });

            let allProducts = 0;
            productLabels.forEach( product => allProducts += countryObj.products[product]);

            productLabels = productLabels.map( (product, index) => (`${product}(${(countryObj.products[product] * 100 / allProducts).toFixed(2)}%)(${data[index]} pcs)`));
            const finalData: any = {
                labels: productLabels,
                datasets: [{data, backgroundColor: colors}]
            }
            return (
                <div className={styles.doughnutStatistic} key={`${country}`}>
                    <h1>{country} heaters (Heater orders for country {statistic[country].ordersWithConfigProducts})</h1>
                    <Doughnut data={finalData}/>
                </div>
            )
        })
        return result
    }

    const useGetHeaterOrdersCount = () => {
        return useMemo(() => {
            let count = 0;
            for(let country of Object.keys(statistic)) {
                count += statistic[country].ordersWithConfigProducts;
            }
            
            return count;
        }, [statistic])
    }

    const useGetHeatersPcs = () => {
        return useMemo(() => {
            let count = 0;
            for(let country of Object.keys(statistic)) {
                for(let product of Object.keys(statistic[country].products)) {
                    count += statistic[country].products[product]
                }
            }
            return count;
        }, [statistic])
    }

    return (
        <section className={styles.doughnuts}>
            <div className={`${styles.doughnutStatistic} ${styles.allOrdersDoughnut}`}>
                <h1>Heater orders ({useGetHeaterOrdersCount()})</h1>
                <Doughnut data={generateLookingOrdersParams(statistic)}/>
            </div>
            <div className={`${styles.doughnutStatistic} ${styles.allOrdersDoughnut}`}>
                <h1>Heater pcs.{useGetHeatersPcs()}</h1>
                <Doughnut data={generateLookingPcsParams(statistic)}/>
            </div>
            {generateProductChartsByCountry(statistic)}
        </section>
    )
}

export default StatisticResult;