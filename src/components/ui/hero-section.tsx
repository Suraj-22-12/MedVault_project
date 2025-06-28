import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronRight, Menu, X, Activity, Calendar, Pill } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { cn } from '@/lib/utils'
import DarkModeToggle from '../DarkModeToggle'

const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'spring' as const,
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
}

export function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main className="overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-black dark:via-gray-900/20 dark:to-black">
                <div
                    aria-hidden
                    className="z-[2] absolute inset-0 pointer-events-none isolate opacity-50 contain-strict hidden lg:block">
                    <div className="w-[35rem] h-[80rem] -translate-y-[350px] absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(59,100%,85%,.08)_0,hsla(220,100%,55%,.02)_50%,hsla(240,100%,45%,0)_80%)] dark:bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(240,100%,15%,.3)_0,hsla(220,100%,25%,.1)_50%,hsla(240,100%,5%,0)_80%)]" />
                    <div className="h-[80rem] absolute left-0 top-0 w-56 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%] dark:bg-[radial-gradient(50%_50%_at_50%_50%,hsla(240,100%,15%,.2)_0,hsla(240,100%,5%,.05)_80%,transparent_100%)]" />
                    <div className="h-[80rem] -translate-y-[350px] absolute left-0 top-0 w-56 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] dark:bg-[radial-gradient(50%_50%_at_50%_50%,hsla(240,100%,15%,.15)_0,hsla(240,100%,5%,.03)_80%,transparent_100%)]" />
                </div>
                <section>
                    <div className="relative pt-24 md:pt-36">
                        <AnimatedGroup
                            variants={{
                                container: {
                                    visible: {
                                        transition: {
                                            delayChildren: 1,
                                        },
                                    },
                                },
                                item: {
                                    hidden: {
                                        opacity: 0,
                                        y: 20,
                                    },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            type: 'spring' as const,
                                            bounce: 0.3,
                                            duration: 2,
                                        },
                                    },
                                },
                            }}
                            className="absolute inset-0 -z-20">
                            {/* Medical themed floating elements */}
                            <div className="absolute inset-x-0 top-56 -z-20 hidden lg:top-32 opacity-20 dark:opacity-10">
                                <div className="w-full h-auto max-w-4xl mx-auto relative">
                                    {/* Medical cross floating animation */}
                                    <div className="absolute top-20 left-20 w-16 h-16 animate-pulse">
                                        <div className="absolute inset-0 bg-blue-500/30 rounded-lg transform rotate-12">
                                            <div className="w-full h-1 bg-blue-500 absolute top-1/2 transform -translate-y-1/2"></div>
                                            <div className="h-full w-1 bg-blue-500 absolute left-1/2 transform -translate-x-1/2"></div>
                                        </div>
                                    </div>
                                    
                                    {/* Stethoscope shape */}
                                    <div className="absolute top-40 right-32 w-24 h-24 animate-bounce" style={{animationDuration: '3s'}}>
                                        <div className="w-8 h-8 border-4 border-blue-400/40 rounded-full"></div>
                                        <div className="w-2 h-16 bg-blue-400/40 absolute left-3 top-8 rounded-full transform rotate-45"></div>
                                    </div>
                                    
                                    {/* Heart rate line */}
                                    <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 w-32 h-8 opacity-40">
                                        <svg viewBox="0 0 100 20" className="w-full h-full">
                                            <path d="M0,10 L20,10 L25,5 L30,15 L35,2 L40,18 L45,10 L100,10" 
                                                  stroke="currentColor" 
                                                  strokeWidth="2" 
                                                  fill="none" 
                                                  className="text-blue-500 animate-pulse"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </AnimatedGroup>
                        <div aria-hidden className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--background)_75%)]" />
                        <div className="mx-auto max-w-7xl px-6">
                            <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                                <AnimatedGroup variants={transitionVariants}>
                                    <Link
                                        to="/appointments"
                                        className="hover:bg-background dark:hover:border-t-border bg-muted group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-black/5 transition-all duration-300 dark:border-t-white/5 dark:shadow-zinc-950 dark:bg-gray-800/50">
                                        <span className="text-foreground text-sm dark:text-gray-200">Introducing AI-Powered Health Management</span>
                                        <span className="dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-zinc-700"></span>

                                        <div className="bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500 dark:bg-gray-700">
                                            <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                                                <span className="flex size-6">
                                                    <ArrowRight className="m-auto size-3 dark:text-gray-200" />
                                                </span>
                                                <span className="flex size-6">
                                                    <ArrowRight className="m-auto size-3 dark:text-gray-200" />
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                        
                                    <h1
                                        className="mt-8 max-w-4xl mx-auto text-balance text-6xl md:text-7xl lg:mt-16 xl:text-[5.25rem] font-bold text-gray-900 dark:text-white bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
                                        Your Health, Our Priority
                                    </h1>
                                    <p
                                        className="mx-auto mt-8 max-w-2xl text-balance text-lg text-gray-600 dark:text-gray-300">
                                        Experience seamless healthcare management with MedVault. Book appointments, access medical records, and stay connected with your healthcare providers all in one secure platform.
                                    </p>
                                </AnimatedGroup>

                                <AnimatedGroup
                                    variants={{
                                        container: {
                                            visible: {
                                                transition: {
                                                    staggerChildren: 0.05,
                                                    delayChildren: 0.75,
                                                },
                                            },
                                        },
                                        item: {
                                            hidden: {
                                                opacity: 0,
                                                filter: 'blur(12px)',
                                                y: 12,
                                            },
                                            visible: {
                                                opacity: 1,
                                                filter: 'blur(0px)',
                                                y: 0,
                                                transition: {
                                                    type: 'spring' as const,
                                                    bounce: 0.3,
                                                    duration: 1.5,
                                                },
                                            },
                                        },
                                    }}
                                    className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row">
                                    <div
                                        key={1}
                                        className="bg-foreground/10 rounded-[14px] border p-0.5 dark:bg-white/10 dark:border-gray-600">
                                        <Button
                                            asChild
                                            size="lg"
                                            className="rounded-xl px-5 text-base bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700">
                                            <Link to="/appointments">
                                                <span className="text-nowrap">Book Appointment</span>
                                            </Link>
                                        </Button>
                                    </div>
                                    <Button
                                        key={2}
                                        asChild
                                        size="lg"
                                        variant="ghost"
                                        className="h-10.5 rounded-xl px-5 hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-200 border-0 dark:border-0">
                                        <Link to="/login">
                                            <span className="text-nowrap">Patient Login</span>
                                        </Link>
                                    </Button>
                                </AnimatedGroup>
                            </div>
                        </div>

                        <AnimatedGroup
                            variants={{
                                container: {
                                    visible: {
                                        transition: {
                                            staggerChildren: 0.05,
                                            delayChildren: 0.75,
                                        },
                                    },
                                },
                                item: {
                                    hidden: {
                                        opacity: 0,
                                        filter: 'blur(12px)',
                                        y: 12,
                                    },
                                    visible: {
                                        opacity: 1,
                                        filter: 'blur(0px)',
                                        y: 0,
                                        transition: {
                                            type: 'spring' as const,
                                            bounce: 0.3,
                                            duration: 1.5,
                                        },
                                    },
                                },
                            }}>
                            <div className="relative -mr-56 mt-20 overflow-hidden px-2 sm:mr-0 sm:mt-24 md:mt-32">
                                <div
                                    aria-hidden
                                    className="absolute inset-0 z-10 pointer-events-none [background:radial-gradient(ellipse_at_center,_rgba(0,0,0,0)_60%,var(--background)_100%)] dark:[background:radial-gradient(ellipse_at_center,_rgba(0,0,0,0)_60%,#000_100%)]"
                                />
                                <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-6xl overflow-hidden rounded-2xl border p-4 shadow-lg shadow-zinc-950/15 ring-1 dark:bg-gray-800 dark:border-gray-700">
                                    <div className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 dark:border-gray-700/20 shadow-2xl">
                                        <div className="flex items-center justify-between mb-8">
                                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Health Dashboard</h3>
                                            <div className="flex items-center space-x-2">
                                                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                                <span className="text-sm text-gray-500 dark:text-gray-400">Live Status</span>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                            {/* Health Score Card */}
                                            <div className="bg-blue-50 dark:bg-gray-800 p-6 rounded-2xl border border-blue-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-200">
                                                <div className="flex items-center justify-between mb-4">
                                                    <Activity className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                                                    <span className="text-sm text-green-600 dark:text-green-400 font-medium">+2.5%</span>
                                                </div>
                                                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">92%</div>
                                                <div className="text-blue-600 dark:text-blue-400 text-sm font-medium">Health Score</div>
                                                <div className="mt-3 w-full bg-blue-200 dark:bg-gray-700 rounded-full h-2">
                                                    <div className="bg-blue-600 dark:bg-blue-400 h-2 rounded-full" style={{ width: '92%' }}></div>
                                                </div>
                                            </div>

                                            {/* Next Appointment Card */}
                                            <div className="bg-green-50 dark:bg-gray-800 p-6 rounded-2xl border border-green-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-200">
                                                <div className="flex items-center justify-between mb-4">
                                                    <Calendar className="h-8 w-8 text-green-600 dark:text-green-400" />
                                                    <span className="text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-2 py-1 rounded-full">Tomorrow</span>
                                                </div>
                                                <div className="text-lg font-bold text-gray-900 dark:text-white mb-1">Dr. Johnson</div>
                                                <div className="text-green-600 dark:text-green-400 text-sm font-medium">Next Appointment</div>
                                                <div className="text-sm text-gray-500 dark:text-gray-400 mt-2">10:30 AM - Cardiology</div>
                                            </div>

                                            {/* Medications Card */}
                                            <div className="bg-purple-50 dark:bg-gray-800 p-6 rounded-2xl border border-purple-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-200">
                                                <div className="flex items-center justify-between mb-4">
                                                    <Pill className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                                                    <span className="text-xs bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 px-2 py-1 rounded-full">Due</span>
                                                </div>
                                                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">5</div>
                                                <div className="text-purple-600 dark:text-purple-400 text-sm font-medium">Active Medications</div>
                                                <div className="text-sm text-gray-500 dark:text-gray-400 mt-2">2 due today</div>
                                            </div>
                                        </div>

                                        {/* Additional Dashboard Elements */}
                                        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
                                            <div className="bg-white/50 dark:bg-gray-800/50 p-6 rounded-2xl border border-white/20 dark:border-gray-700/20">
                                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Recent Activity</h4>
                                                <div className="space-y-3">
                                                    <div className="flex items-center space-x-3">
                                                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                                        <span className="text-sm text-gray-600 dark:text-gray-300">Blood pressure recorded</span>
                                                        <span className="text-xs text-gray-400 ml-auto">2h ago</span>
                                                    </div>
                                                    <div className="flex items-center space-x-3">
                                                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                                        <span className="text-sm text-gray-600 dark:text-gray-300">Medication taken</span>
                                                        <span className="text-xs text-gray-400 ml-auto">4h ago</span>
                                                    </div>
                                                    <div className="flex items-center space-x-3">
                                                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                                        <span className="text-sm text-gray-600 dark:text-gray-300">Lab results updated</span>
                                                        <span className="text-xs text-gray-400 ml-auto">1d ago</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="bg-white/50 dark:bg-gray-800/50 p-6 rounded-2xl border border-white/20 dark:border-gray-700/20">
                                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Health Trends</h4>
                                                <div className="flex items-end space-x-2 h-24">
                                                    {[40, 60, 45, 80, 65, 90, 75, 85].map((height, i) => (
                                                        <div
                                                            key={i}
                                                            className="bg-gradient-to-t from-cyan-500 to-blue-500 rounded-sm flex-1 opacity-70 hover:opacity-100 transition-opacity"
                                                            style={{ height: `${height}%` }}
                                                        />
                                                    ))}
                                                </div>
                                                <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-2">
                                                    <span>Jan</span>
                                                    <span>Aug</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AnimatedGroup>
                    </div>
                </section>
            </main>
        </>
    )
}

const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Appointments', href: '/appointments' },
    { name: 'Records', href: '/records' },
    { name: 'About', href: '#about' },
]

const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    
    return (
        <header>
            <nav
                data-state={menuState && 'active'}
                className="fixed z-20 w-full px-2 group">
                <div className={cn('mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12', isScrolled && 'bg-background/50 max-w-4xl rounded-2xl border backdrop-blur-lg lg:px-5 dark:bg-black/50 dark:border-gray-700')}>
                    <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
                        <div className="flex w-full justify-between lg:w-auto">
                            <Link
                                to="/"
                                aria-label="home"
                                className="flex items-center space-x-2">
                                <Logo />
                            </Link>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden dark:text-gray-200">
                                <Menu className="in-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                                <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                            </button>
                        </div>

                        <div className="absolute inset-0 m-auto hidden size-fit lg:block">
                            <ul className="flex gap-8 text-sm">
                                {menuItems.map((item, index) => (
                                    <li key={index}>
                                        <Link
                                            to={item.href}
                                            className="text-muted-foreground hover:text-accent-foreground block duration-150 dark:text-gray-300 dark:hover:text-blue-400">
                                            <span>{item.name}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-background group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent dark:bg-black/95 dark:border-gray-700">
                            <div className="lg:hidden">
                                <ul className="space-y-6 text-base">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <Link
                                                to={item.href}
                                                className="text-muted-foreground hover:text-accent-foreground block duration-150 dark:text-gray-300 dark:hover:text-blue-400">
                                                <span>{item.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit items-center">
                                <DarkModeToggle className="mr-2" />
                                <Button
                                    asChild
                                    variant="outline"
                                    size="sm"
                                    className={cn(isScrolled && 'lg:hidden', 'dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-800 border-0 dark:border-0')}>
                                    <Link to="/login">
                                        <span>Login</span>
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    size="sm"
                                    className={cn(isScrolled && 'lg:hidden', 'bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700')}>
                                    <Link to="/appointments">
                                        <span>Book Now</span>
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    size="sm"
                                    className={cn(isScrolled ? 'lg:inline-flex' : 'hidden', 'bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700')}>
                                    <Link to="/appointments">
                                        <span>Get Started</span>
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

const Logo = ({ className }: { className?: string }) => {
    return (
        <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">M</span>
            </div>
            <span className="font-bold text-xl dark:text-white">MedVault</span>
        </div>
    )
}
