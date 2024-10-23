'use client';

import { useEffect, useState } from 'react'

export default function FlowChart({ count, setCount }: { count: number, setCount: Function }) {
    const [focusedStep, setFocusedStep] = useState(0)
    const steps = Array.from({ length: count }, (_, i) => i + 1)

    useEffect(() => { }, [])

    return (
        <div className="flex items-center justify-center w-full max-w-md mx-auto mt-10">
            {steps.map((step, index) => (
                <>
                    <div key={step} className="flex items-center">
                        <button
                            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 ${step === focusedStep
                                ? 'bg-cyan-400 text-white scale-125'
                                : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                                }`}
                            onClick={() => { setFocusedStep(step); setCount(step-1) }}
                        >
                            {step}
                        </button>
                        {index < steps.length - 1 && (
                            <div className="w-[20px] h-1 bg-cyan-400 mx-2" />
                        )}
                    </div>
                    {/* {index<steps.length-1 && (<div className='flex-1 h-1 bg-cyan-400'></div>)} */}
                </>
            ))}
        </div>
    )
}