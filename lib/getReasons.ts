export function getReasons(country: string) {

    switch(country){

        case "Finland":

            return [

                "Excellent education",

                "Safe environment",

                "Strong IT programmes",

                "Great work-life balance"

            ];

        case "Germany":

            return [

                "Low tuition",

                "Engineering excellence",

                "Strong job market",

                "Research opportunities"

            ];

        default:

            return [

                "Good academic reputation",

                "International environment",

                "Career opportunities"

            ];

    }

}