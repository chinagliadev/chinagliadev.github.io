import { useEffect, useMemo, useRef } from 'react'
import Chart from 'chart.js/auto'
import { agruparPorLinguagem } from '../utils/github'

function GraficoLinguagens({ repositorios }) {
  const canvasRef = useRef(null)
  const linguagens = useMemo(() => agruparPorLinguagem(repositorios), [repositorios])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || !repositorios) return

    const ctx = canvas.getContext('2d')
    const gradient = ctx.createLinearGradient(0, 0, 400, 0)
    gradient.addColorStop(0, 'rgba(124, 58, 237, 0.85)')
    gradient.addColorStop(1, 'rgba(0, 180, 216, 0.85)')

    const grafico = new Chart(canvas, {
      type: 'bar',
      data: {
        labels: Object.keys(linguagens),
        datasets: [
          {
            label: 'Repositórios',
            data: Object.values(linguagens),
            backgroundColor: gradient,
            borderColor: 'rgba(255, 255, 255, 0.3)',
            borderWidth: 1,
            borderRadius: 8,
            barPercentage: 0.7,
          },
        ],
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: 'rgba(30, 30, 40, 0.7)',
            borderColor: 'rgba(255, 255, 255, 0.2)',
            borderWidth: 1,
            titleColor: '#fff',
            bodyColor: '#e5e5e5',
            padding: 10,
            cornerRadius: 8,
          },
        },
        scales: {
          x: {
            grid: { color: 'rgba(255, 255, 255, 0.08)' },
            ticks: { color: 'rgba(255, 255, 255, 0.7)' },
          },
          y: {
            grid: { color: 'rgba(255, 255, 255, 0.05)' },
            ticks: { color: 'rgba(255, 255, 255, 0.85)' },
          },
        },
      },
    })

    return () => grafico.destroy()
  }, [repositorios, linguagens])

  return <canvas id="github-grafico" ref={canvasRef}></canvas>
}

export default GraficoLinguagens
