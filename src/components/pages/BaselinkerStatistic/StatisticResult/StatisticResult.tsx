import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import styles from "./statisticResult.module.css";
import { Doughnut} from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";

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

            productLabels = productLabels.map( product => (`${product}(${(countryObj.products[product] * 100 / allProducts).toFixed(2)}%)`));
            const finalData: any = {
                labels: productLabels,
                datasets: [{data, backgroundColor: colors}]
            }
            console.log(country);
            console.log(finalData);
            return (
                <div className={styles.doughnutStatistic} key={`${country}`}>
                    <h1>{country} heaters</h1>
                    <Doughnut data={finalData}/>
                </div>
            )
        })
        console.log("Before return")
        return result
    }

    return (
        <section className={styles.doughnuts}>
            {/* <div className={styles.allOrdersStatistic}>
                <h1>All orders</h1>
                <Doughnut data={useMemo(() => generateAllOrdersParams(statistic), [])}/>
            </div> */}
            <div className={`${styles.doughnutStatistic} ${styles.allOrdersDoughnut}`}>
                <h1>Heater orders</h1>
                <Doughnut data={generateLookingOrdersParams(statistic)}/>
            </div>
            {generateProductChartsByCountry(statistic)}
        </section>
    )
}

export default StatisticResult;