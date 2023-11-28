import Priceoption from "../Priceoption/Priceoption";

const PriceOptions = () => {
    const priceOptions = [
        {
            "id": 1,
            "name": "Fitness Plus",
            "features": [
                "Cardio equipment",
                "Strength training area",
                "Group fitness classes",
                "Personal training sessions",
                "Sauna and steam room",
                "24/7 access"
            ],
            "price": 39.99
        },
        {
            "id": 2,
            "name": "EliteFit Center",
            "features": [
                "Modern gym equipment",
                "Yoga and Pilates studio",
                "Indoor cycling",
                "Nutrition counseling",
                "Spa and relaxation area",
                "Access to fitness events"
            ],
            "price": 49.99
        },
        {
            "id": 3,
            "name": "Wellness Hub",
            "features": [
                "Fitness assessments",
                "Outdoor workout area",
                "Nutrition workshops",
                "Hydrotherapy pool",
                "Virtual workout classes",
                "Childcare services"
            ],
            "price": 29.99
        },
        {
            "id": 4,
            "name": "PowerFit Gym",
            "features": [
                "CrossFit training",
                "Functional fitness area",
                "Rock climbing wall",
                "Sports massage",
                "Smoothie bar"
            ],
            "price": 59.99
        },
        {
            "id": 5,
            "name": "FlexiFitness",
            "features": [
                "State-of-the-art equipment",
                "Dance and aerobics studio",
                "Mindfulness meditation",
                "Physical therapy",
                "Cafe and nutrition bar"
            ],
            "price": 34.99
        }
    ]
    return (
        <div className="m-12">
            <h2 className="text-5xl">Best Prices in The Town</h2> <br />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {
                    priceOptions.map(option => <Priceoption key={option.id} option={option}></Priceoption>)
                }
            </div>

        </div>
    );
};

export default PriceOptions;