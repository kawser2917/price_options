import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';
const LineChart = () => {
    const data = [
        {
            "id": 1,
            "name": "John",
            "math_mark": 85,
            "physics_mark": 78,
            "chemistry_mark": 92
        },
        {
            "id": 2,
            "name": "Emily",
            "math_mark": 92,
            "physics_mark": 85,
            "chemistry_mark": 88
        },
        {
            "id": 3,
            "name": "David",
            "math_mark": 75,
            "physics_mark": 80,
            "chemistry_mark": 85
        },
        {
            "id": 4,
            "name": "Sophia",
            "math_mark": 89,
            "physics_mark": 94,
            "chemistry_mark": 87
        },
        {
            "id": 5,
            "name": "Michael",
            "math_mark": 78,
            "physics_mark": 92,
            "chemistry_mark": 89
        },
        {
            "id": 6,
            "name": "Olivia",
            "math_mark": 90,
            "physics_mark": 88,
            "chemistry_mark": 91
        },
        {
            "id": 7,
            "name": "Daniel",
            "math_mark": 85,
            "physics_mark": 92,
            "chemistry_mark": 78
        },
        {
            "id": 8,
            "name": "Ava",
            "math_mark": 94,
            "physics_mark": 89,
            "chemistry_mark": 90
        },
        {
            "id": 9,
            "name": "Ethan",
            "math_mark": 88,
            "physics_mark": 90,
            "chemistry_mark": 85
        },
        {
            "id": 10,
            "name": "Isabella",
            "math_mark": 92,
            "physics_mark": 85,
            "chemistry_mark": 94
        }
    ]




    return (
        <div>
            <LChart width={800} height={400} data={data}>
                <XAxis dataKey='name'></XAxis>
                <YAxis dataKey=''></YAxis>

                <Line dataKey="math_mark" stroke='red'></Line>
                <Line dataKey="chemistry_mark" stroke='yellow'></Line>
                <Line dataKey="physics_mark" stroke='blue'></Line>
            </LChart>

        </div>
    );
};

export default LineChart;