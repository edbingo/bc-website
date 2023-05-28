(() => {
    'use strict'

    const storedTheme = localStorage.getItem('theme')

    const getPreferredTheme = () => {
        if (storedTheme) {
            return storedTheme
        }

        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }

    const setTheme = (theme) => {
        document.documentElement.setAttribute('data-bs-theme', theme)
    }

    const toggleTheme = (icon, vseth, vsuzh) => {
        const currentTheme = document.documentElement.getAttribute('data-bs-theme')
        const newTheme = currentTheme === 'light' ? 'dark' : 'light'
        setImages(newTheme, icon, vseth, vsuzh)
        localStorage.setItem('theme', newTheme)
        setTheme(newTheme)
    }

    const setImages = (theme, icon, vseth, vsuzh) => {
        const bulbClass = theme === 'dark' ? 'bi-lightbulb-fill' : 'bi-lightbulb'
        icon.classList.remove('bi-lightbulb', 'bi-lightbulb-fill')
        icon.classList.add(bulbClass)
        const vsethPath = theme === 'dark' ? '/assets/img/static/vseth_Logo_bylines_organisation-invers.svg' : '/assets/img/static/vseth_Logo_bylines_organisation.svg'
        const vsuzhPath = theme === 'dark' ? '/assets/img/static/vsuzh_logo_dark.webp' : '/assets/img/static/vsuzh_logo_light.webp'
        vseth.src = vsethPath
        vsuzh.src = vsuzhPath
    }

    setTheme(getPreferredTheme())

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
        if (!['light', 'dark'].includes(storedTheme)) {
            setTheme(getPreferredTheme())
        }
    })

    window.addEventListener('DOMContentLoaded', () => {
        const button = document.getElementById('colour-switch')
        const icon = button.querySelector('i')
        const vseth = document.getElementById('vseth')
        const vsuzh = document.getElementById('vsuzh')
        setImages(getPreferredTheme(), icon, vseth, vsuzh)
        button.addEventListener('click', (event) => {
            event.preventDefault()
            toggleTheme(icon, vseth, vsuzh)
        })
    })
})()