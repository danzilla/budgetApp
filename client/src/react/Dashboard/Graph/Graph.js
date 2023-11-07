import { connect } from "react-redux";
import { Rose } from '@ant-design/plots';


const GraphView = (props) => {

    const data = [
        {
            type: '分类一',
            value: 27,
        },
        {
            type: '分类二',
            value: 25,
        },
        {
            type: '分类三',
            value: 18,
        },
        {
            type: '分类四',
            value: 15,
        },
        {
            type: '分类五',
            value: 10,
        },
        {
            type: '其他',
            value: 5,
        },
    ];
    const config = {
        data,
        xField: 'type',
        yField: 'value',
        seriesField: 'type',
        radius: 0.7,
        legend: {
            position: 'right',
        },
    };

    return (
        <>
            <Rose className="card-3 " style={{ position: 'sticky', height: '45%'}} {...config} />
            <Rose className="card-3 " style={{ position: 'sticky', height: '45%' }} {...config} />
        </>
    );
}

// Redux connect to store
const mapStateToProps = state => { return { data: state }; };
export default connect(mapStateToProps)(GraphView);