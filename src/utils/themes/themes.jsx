"use client";
import React, { useEffect, useState } from "react";
import { FiSun, FiMoon, FiMonitor } from "react-icons/fi";
import { useTheme } from "next-themes";


export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted) return null

  return (
    <div>
      {theme==="dark"? <FiMoon className=" text-black  text-lg" onClick={() => setTheme('light')}/>
      :<FiSun className=" text-black   text-lg" onClick={() => setTheme('dark')}/>
    }</div>
  )
};