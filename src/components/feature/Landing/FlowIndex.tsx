'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function FlowChart() {
    const [numSteps, setNumSteps] = useState(4)
    const [currentStep, setCurrentStep] = useState(1)

    const handleNumStepsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value)
        setNumSteps(value > 0 ? value : 1)
        setCurrentStep(1)
    }

    const handlePrevStep = () => {
        setCurrentStep(prev => Math.max(prev - 1, 1))
    }

    const handleNextStep = () => {
        setCurrentStep(prev => Math.min(prev + 1, numSteps))
    }

    return <div>
        <svg width={numSteps * 60 + 1} height="53" viewBox={`0 0 ${numSteps * 60 + 1} 53`} fill="none" xmlns="http://www.w3.org/2000/svg">
            {Array.from({ length: numSteps - 1 }, (_, i) => (
                <line
                    key={`line-${i}`}
                    x1={i * 60 + 17}
                    y1="26.5"
                    x2={(i + 1) * 60 + 1}
                    y2="26.5"
                    stroke="#8CC9D7"
                    strokeWidth="1.36723"
                />
            ))}

            {Array.from({ length: numSteps }, (_, i) => (
                <g key={`step-${i}`}>
                    <circle
                        cx={i * 60 + 9}
                        cy="26.5"
                        r="20"
                        fill={currentStep === i + 1 ? "#2FC5E1" : "#D2F7FB"}
                    />
                    <text
                        x={i * 60 + 9}
                        y="30"
                        textAnchor="middle"
                        fill={currentStep === i + 1 ? "white" : "black"}
                        fontSize="10"
                        fontFamily="Arial, sans-serif"
                    >
                        {i + 1}
                    </text>
                </g>
            ))}
        </svg>
    </div>
}