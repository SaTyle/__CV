import { Progress } from "antd"
import { useEffect, useState } from "react"

const Languages = () => {
    const [java, setJava] = useState(0)
    const [cpp, setCpp] = useState(0)
    const [py, setPy] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            if (java < 98) {
                setJava(prevCount => prevCount + 1);
            }
            if (cpp < 88) {
                setCpp(prevCount => prevCount + 1);
            }
            if (py < 90) {
                setPy(prevCount => prevCount + 1);
            }
        }, 30);

        return () => clearInterval(timer);
    }, [java, cpp])
    return (
        <div className="flex flex-col space-y-1 pt-6">
            <div className="flex flex-col gap-y-4">
                <span className='text-Snow text-xs font-bold'>Languages</span>
                <div className="flex flex-row items-center justify-center space-x-6">
                    <div className="flex flex-col items-center justify-center gap-y-2">
                        <Progress strokeColor="#1fdf64" type="circle" percent={java} size={65} />
                        <span className='text-xs font-bold text-Snow'>Java</span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-y-2">
                        <Progress strokeColor="#1fdf64" type="circle" percent={cpp} size={65} />
                        <span className='text-xs font-bold text-Snow'>C++</span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-y-2">
                        <Progress strokeColor="#1fdf64" type="circle" percent={cpp} size={65} />
                        <span className='text-xs font-bold text-Snow'>Python</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Languages