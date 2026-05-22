<template>
  <!-- 背景维持高对比度数码暗调 -->
  <div class="relative min-h-screen w-full bg-gradient-to-b from-[#11111a] via-[#0d0d14] to-[#08080c] flex flex-col items-center justify-center overflow-hidden font-sans select-none px-4 sm:px-6">
    
    <!-- 后景动态赛博光晕 -->
    <div 
      class="absolute top-1/3 sm:top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] sm:w-[600px] sm:h-[600px] blur-[100px] sm:blur-[150px] rounded-full pointer-events-none transition-all duration-1000 opacity-60"
      :style="{ background: `radial-gradient(circle, ${currentFish.glowColor} 0%, transparent 80%)` }"
    ></div>

    <!-- 顶层彩蛋：【佛光普照】全息金佛降临动画 -->
    <div v-if="buddhaActive" class="absolute inset-0 z-40 flex items-center justify-center pointer-events-none overflow-hidden bg-amber-500/[0.03]">
      <div class="relative flex flex-col items-center justify-center animate-buddha-manifest">
        <!-- 3D 质感圣光金佛 SVG -->
        <svg class="w-64 h-64 sm:w-80 sm:h-80 text-amber-400 filter drop-shadow-[0_0_35px_rgba(251,191,36,0.8)]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2a3 3 0 0 0-3 3c0 .54.14 1.05.39 1.5A7 7 0 0 0 4 13.5a3.5 3.5 0 0 0 3.5 3.5h9a3.5 3.5 0 0 0 3.5-3.5 7 7 0 0 0-5.39-7c.25-.45.39-.96.39-1.5a3 3 0 0 0-3-3zm0 2a1 1 0 0 1 1 1 1 1 0 0 1-1 1 1 1 0 0 1-1-1 1 1 0 0 1 1-1zm0 4.5a5 5 0 0 1 4.9 4H7.1a5 5 0 0 1 4.9-4zm-4.5 7h9a1.5 1.5 0 0 1 1.5 1.5c0 .35-.12.67-.32.93l-1.34-1.34A2.5 2.5 0 0 0 12 14a2.5 2.5 0 0 0-3.74 3.09l-1.34 1.34a1.47 1.47 0 0 1-.32-.93 1.5 1.5 0 0 1 1.5-1.5zm4.5 1a1 1 0 0 1 1 1v2.5a.5.5 0 0 1-1 0V17a1 1 0 0 1 0-2.5z"/>
          <path d="M6 19.5a1.5 1.5 0 0 0 1.5 1.5h9a1.5 1.5 0 0 0 1.5-1.5 1.5 1.5 0 0 0-1.5-1.5h-9A1.5 1.5 0 0 0 6 19.5z" opacity="0.8"/>
        </svg>
        <h2 class="text-2xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-amber-400 to-orange-400 tracking-widest mt-4 drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)] animate-pulse">
          ✨ 缘法降临 • 佛光普照 ✨
        </h2>
      </div>
    </div>

    <!-- 右上角：法宝商店按钮 -->
    <button 
      @click="openStore"
      class="absolute top-4 right-4 sm:top-6 sm:right-6 z-40 backdrop-blur-xl bg-white/[0.06] hover:bg-amber-500/20 border border-white/20 hover:border-amber-400/50 text-white hover:text-amber-300 px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl sm:rounded-2xl flex items-center gap-2 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.4)] group active:scale-95"
    >
      <svg class="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:rotate-12 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
      <span class="text-xs sm:text-sm font-bold tracking-wider">法宝商店</span>
    </button>

    <!-- 状态面板：功德显示 -->
    <div class="z-10 backdrop-blur-xl bg-white/[0.04] border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 px-8 sm:px-12 text-center shadow-[0_12px_40px_rgba(0,0,0,0.6)] w-full max-w-[280px] sm:max-w-[340px]">
      <p class="text-[11px] sm:text-xs font-bold tracking-widest text-slate-300 uppercase mb-1 sm:mb-2">Cyber Merits / 当前功德</p>
      <h1 class="text-4xl sm:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-yellow-100 via-amber-400 to-orange-400 tracking-tight drop-shadow-[0_4px_12px_rgba(251,191,36,0.4)] font-mono">
        {{ Math.floor(meritCount) }}
      </h1>
      <div class="text-[11px] sm:text-xs text-amber-300 mt-2.5 space-y-1 tracking-wide bg-black/30 py-1.5 px-3 rounded-xl border border-white/[0.05]">
        <p>当前法宝：<span class="font-black text-white">{{ currentFish.name }}</span></p>
        <p v-if="autoClickRate > 0" class="text-cyan-400 font-bold animate-pulse">自动超度中：每秒 +{{ (autoClickRate * currentFish.multiplier).toFixed(1) }}</p>
      </div>
    </div>

    <!-- 中部主交互区 -->
    <div class="relative my-8 sm:my-12 flex items-center justify-center w-64 h-64 sm:w-80 sm:h-80">
      <canvas ref="canvasRef" class="absolute inset-0 pointer-events-none z-20"></canvas>

      <!-- 动态浮现的“功德+X”文字与暴击文字 -->
      <div class="absolute inset-0 pointer-events-none z-30 overflow-visible">
        <span
          v-for="text in floatingTexts"
          :key="text.id"
          class="absolute font-black drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] select-none pointer-events-none"
          :class="[text.isCrit ? 'text-3xl sm:text-4xl animate-crit-float-up bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-amber-400 to-red-500 font-extrabold' : 'text-2xl sm:text-3xl animate-float-up-fade']"
          :style="{ left: `${text.x}px`, top: `${text.y}px`, color: text.isCrit ? '' : currentFish.textColor, WebkitTextStroke: text.isCrit ? '1.5px #000' : '1px rgba(0,0,0,0.5)' }"
        >
          {{ text.content }}
        </span>
      </div>

      <!-- 木鱼主体 -->
      <button
        @mousedown="handlePCKnock"
        @touchstart.prevent="handleMobileKnock"
        class="group relative focus:outline-none transition-transform duration-75 ease-out outline-none select-none touch-none"
        :class="[isKnocking ? 'scale-90' : 'hover:scale-105 active:scale-95']"
      >
        <div class="absolute inset-0 rounded-full blur-3xl transition-all duration-500 bg-amber-400/20 group-hover:bg-amber-400/30"></div>
        
        <svg class="w-52 h-52 sm:w-64 sm:h-64 drop-shadow-[0_15px_35px_rgba(0,0,0,0.8)] transition-all duration-300 cursor-pointer" viewBox="0 0 200 200" fill="currentColor">
          <path d="M100,30 C50,30 25,65 25,110 C25,155 60,170 100,170 C140,170 175,155 175,110 C175,65 150,30 100,30 Z" :fill="`url(#fishGrad-${currentFish.id})`" />
          <path d="M50,110 C50,80 70,60 100,60 C130,60 150,80 150,110" stroke="#000" stroke-width="5" fill="none" stroke-linecap="round" opacity="0.4"/>
          <path d="M35,120 C45,150 70,155 100,155 C130,155 155,150 165,120" stroke="#000" stroke-width="4" fill="none" stroke-linecap="round" opacity="0.4"/>
          <circle cx="100" cy="115" r="14" fill="#000" />
          <path d="M86,115 L65,115" stroke="#000" stroke-width="6" stroke-linecap="round" />
          <path d="M114,115 L135,115" stroke="#000" stroke-width="6" stroke-linecap="round" />
          
          <defs>
            <linearGradient :id="`fishGrad-${currentFish.id}`" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" :stop-color="currentFish.colors[0]" />
              <stop offset="50%" :stop-color="currentFish.colors[1]" />
              <stop offset="100%" :stop-color="currentFish.colors[2]" />
            </linearGradient>
          </defs>
        </svg>
      </button>
    </div>

    <!-- 底部提示 -->
    <div class="z-10 flex flex-col items-center gap-3 sm:gap-4">
      <p class="text-[11px] sm:text-xs text-slate-400 font-medium tracking-wider">内核级音频合成 • 5%几率触发佛光普照爆率 • 积累福报</p>
      <button @click="resetGame" class="text-[11px] sm:text-xs text-red-400 font-bold backdrop-blur-xl bg-red-500/[0.05] hover:bg-red-500/20 border border-red-500/30 px-4 py-1.5 rounded-full transition-all duration-300 active:scale-95 shadow-md">
        重置洗礼
      </button>
    </div>

    <!-- 商店弹窗 -->
    <div v-if="isStoreOpen" @click="isStoreOpen = false" class="fixed inset-0 bg-black/75 backdrop-blur-md z-50 flex items-end sm:items-center sm:justify-end">
      <div @click.stop class="w-full sm:max-w-md h-[85vh] sm:h-full bg-[#12121c]/98 border-t sm:border-t-0 sm:border-l border-white/15 p-5 sm:p-6 flex flex-col shadow-[-10px_0_30px_rgba(0,0,0,0.5)] rounded-t-3xl sm:rounded-t-none relative overflow-hidden">
        <div class="w-12 h-1 bg-white/20 rounded-full mx-auto mb-4 sm:hidden"></div>

        <div class="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
          <div>
            <h2 class="text-xl font-black text-white tracking-wide">万华法宝阁</h2>
            <p class="text-xs font-bold text-slate-300 mt-0.5">消耗功德，解锁高阶赛博赛道</p>
          </div>
          <button @click="isStoreOpen = false" class="text-slate-300 hover:text-white p-2 rounded-xl hover:bg-white/10 border border-transparent hover:border-white/10 transition-all">
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        <div class="flex bg-black/40 p-1.5 rounded-xl mb-4 border border-white/10 shadow-inner">
          <button @click="switchTab('fish')" class="flex-1 text-center py-2.5 text-xs font-black rounded-lg transition-all tracking-wider" :class="activeTab === 'fish' ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-black shadow-md' : 'text-slate-300 hover:text-white'">
            木鱼外观
          </button>
          <button @click="switchTab('auto')" class="flex-1 text-center py-2.5 text-xs font-black rounded-lg transition-all tracking-wider" :class="activeTab === 'auto' ? 'bg-gradient-to-r from-cyan-400 to-cyan-500 text-black shadow-md' : 'text-slate-300 hover:text-white'">
            自动诵经 (Lv.{{ autoClickLevel }})
          </button>
        </div>

        <div class="flex-1 overflow-y-auto pr-1 flex flex-col gap-3.5 pb-6">
          <template v-if="activeTab === 'fish'">
            <div v-for="item in shopItems" :key="item.id" class="p-4 rounded-xl border transition-all duration-300 flex items-center justify-between shadow-md" :class="[currentFishId === item.id ? 'border-amber-400 bg-amber-500/[0.08] shadow-[0_0_15px_rgba(245,158,11,0.15)]' : 'border-white/10 bg-white/[0.03] hover:border-white/20']">
              <div class="flex items-center gap-3.5">
                <div class="w-11 h-11 rounded-xl flex items-center justify-center font-black text-black text-sm shadow-[inset_0_2px_4px_rgba(255,255,255,0.2)]" :style="{ background: `linear-gradient(135deg, ${item.colors[0]}, ${item.colors[2]})` }">卍</div>
                <div>
                  <h3 class="font-black text-white text-sm sm:text-base tracking-wide">{{ item.name }}</h3>
                  <p class="text-xs text-emerald-400 font-bold mt-0.5">单点功德 +{{ item.multiplier }}</p>
                </div>
              </div>
              <div>
                <button v-if="ownedFishIds.includes(item.id) && currentFishId !== item.id" @click="equipFish(item.id)" class="text-xs bg-white/10 hover:bg-white/20 border border-white/20 text-white px-3.5 py-2 rounded-xl font-extrabold shadow-md transition-all active:scale-95">装备</button>
                <button v-else-if="currentFishId === item.id" disabled class="text-xs bg-amber-400 text-black px-3.5 py-2 rounded-xl font-black opacity-90 cursor-not-allowed shadow-md">当前法宝</button>
                <button v-else @click="buyFish(item)" class="text-xs px-4 py-1.5 rounded-xl font-black flex flex-col items-center min-w-[76px] transition-all active:scale-95 shadow-lg" :class="meritCount >= item.price ? 'bg-gradient-to-r from-amber-400 to-orange-400 border border-amber-300 text-black' : 'bg-white/5 border border-white/5 text-slate-500 cursor-not-allowed'" :disabled="meritCount < item.price">
                  <span>解锁</span><span class="text-[10px] font-mono font-bold opacity-90">{{ item.price }}</span>
                </button>
              </div>
            </div>
          </template>

          <div v-if="activeTab === 'auto'" class="h-full flex flex-col justify-between">
            <div class="bg-white/[0.03] border border-white/10 p-5 rounded-2xl text-center shadow-inner">
              <div class="w-14 h-14 bg-cyan-500/20 border-2 border-cyan-400 text-cyan-300 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl font-bold shadow-[0_0_15px_rgba(6,182,212,0.3)] animate-pulse">⏳</div>
              <h3 class="text-lg font-black text-white tracking-wide">量子驱动·自动诵经核心</h3>
              <p class="text-xs font-bold text-slate-300 mt-1.5 leading-relaxed">接入宇宙微波背景辐射，实现超空间敲击，福报指数级爆发。</p>
              <div class="grid grid-cols-2 gap-3 mt-5 pt-5 border-t border-white/10 bg-black/30 p-3 rounded-xl">
                <div>
                  <p class="text-[11px] font-bold text-slate-400 tracking-wider">当前挂机速度</p>
                  <p class="text-xl font-mono font-black text-cyan-400 mt-0.5">{{ autoClickRate }} 次/秒</p>
                </div>
                <div>
                  <p class="text-[11px] font-bold text-slate-400 tracking-wider">升级后速度</p>
                  <p class="text-xl font-mono font-black text-emerald-400 mt-0.5">{{ nextUpgradeRate }} 次/秒</p>
                </div>
              </div>
            </div>
            <div class="mt-4">
              <button @click="upgradeAutoClicker" class="w-full py-4 rounded-xl font-black text-sm flex flex-col items-center justify-center gap-0.5 shadow-xl transition-all border active:scale-95" :class="[isMaxLevel || meritCount < upgradeCost ? 'bg-white/5 border-white/5 text-slate-500 cursor-not-allowed' : 'bg-gradient-to-r from-cyan-400 to-blue-500 border-cyan-300 text-black']" :disabled="isMaxLevel || meritCount < upgradeCost">
                <span v-if="isMaxLevel">功德圆满（已达最高阶级）</span>
                <template v-else>
                  <span>升级核心 (消耗 {{ upgradeCost }} 功德)</span>
                  <span class="text-[11px] font-bold opacity-80">当前等级: Lv.{{ autoClickLevel }} → Lv.{{ autoClickLevel + 1 }}</span>
                </template>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

// ==================== 1. 多通道高品质音效合成算法 ====================
let audioCtx = null

const initAudioCtx = () => {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext
    if (AudioContextClass) audioCtx = new AudioContextClass()
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume().catch(() => {})
  }
}

const playSound = (type = 'standard', isAuto = false) => {
  if (isAuto && (!audioCtx || audioCtx.state === 'suspended')) return

  initAudioCtx()
  if (!audioCtx || audioCtx.state === 'suspended') return

  const now = audioCtx.currentTime

  if (type === 'crit_buddha') {
    // 【佛光普照超级暴击音效：庄严宏伟的多重纯阳大金钟和弦】
    const chords = [130.81, 164.81, 196.00, 261.63, 329.63] // C大三和弦基频扩展
    chords.forEach((freq, index) => {
      const osc = audioCtx.createOscillator()
      const gainNode = audioCtx.createGain()
      
      osc.type = index % 2 === 0 ? 'triangle' : 'sine'
      osc.frequency.setValueAtTime(freq, now)
      // 让高音部分产生轻微的频率偏移（Detune），制造出类似大雄宝殿铜钟嗡鸣的厚重震颤波纹
      osc.frequency.linearRampToValueAtTime(freq * 1.005, now + 0.1)

      gainNode.gain.setValueAtTime(0, now)
      gainNode.gain.linearRampToValueAtTime(index === 0 ? 0.5 : 0.25, now + 0.02)
      gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 2.5) // 超长余音舒缓散去
      
      osc.connect(gainNode)
      gainNode.connect(audioCtx.destination)
      osc.start(now)
      osc.stop(now + 2.5)
    })
  } else if (type === 'heavy') {
    // 【大日如来至尊鱼大钟声】
    const frequencies = [110, 165, 220, 330] 
    frequencies.forEach((freq, index) => {
      const osc = audioCtx.createOscillator()
      const gainNode = audioCtx.createGain()
      osc.type = index === 0 ? 'triangle' : 'sine'
      osc.frequency.setValueAtTime(freq, now)
      gainNode.gain.setValueAtTime(0, now)
      gainNode.gain.linearRampToValueAtTime(0.4, now + 0.012)
      gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 2.0)
      osc.connect(gainNode)
      gainNode.connect(audioCtx.destination)
      osc.start(now)
      osc.stop(now + 2.0)
    })
  } else if (type === 'neon') {
    // 【赛博极光鱼】
    const osc = audioCtx.createOscillator()
    const gainNode = audioCtx.createGain()
    osc.type = 'sine'
    osc.frequency.setValueAtTime(240, now)
    osc.frequency.exponentialRampToValueAtTime(180, now + 0.05)
    gainNode.gain.setValueAtTime(0, now)
    gainNode.gain.linearRampToValueAtTime(0.85, now + 0.003)
    gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 0.15)
    osc.connect(gainNode)
    gainNode.connect(audioCtx.destination)
    osc.start(now)
    osc.stop(now + 0.15)
  } else if (type === 'ui_click') {
    // 【UI 菜单点击】
    const osc = audioCtx.createOscillator()
    const gainNode = audioCtx.createGain()
    osc.type = 'sine'
    osc.frequency.setValueAtTime(600, now)
    gainNode.gain.setValueAtTime(0, now)
    gainNode.gain.linearRampToValueAtTime(0.15, now + 0.002)
    gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 0.05)
    osc.connect(gainNode)
    gainNode.connect(audioCtx.destination)
    osc.start(now)
    osc.stop(now + 0.05)
  } else if (type === 'ui_success') {
    // 【解锁升级成功】
    [440, 554.37, 659.25].forEach((freq, i) => {
      const osc = audioCtx.createOscillator()
      const gainNode = audioCtx.createGain()
      osc.type = 'sine'
      osc.frequency.setValueAtTime(freq, now + i * 0.04)
      gainNode.gain.setValueAtTime(0, now + i * 0.04)
      gainNode.gain.linearRampToValueAtTime(0.2, now + i * 0.04 + 0.005)
      gainNode.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.04 + 0.3)
      osc.connect(gainNode)
      gainNode.connect(audioCtx.destination)
      osc.start(now + i * 0.04)
      osc.stop(now + i * 0.04 + 0.3)
    })
  } else {
    // 【标准原初木鱼】
    const osc = audioCtx.createOscillator()
    const gainNode = audioCtx.createGain()
    osc.type = 'sine'
    const baseFreq = 185
    osc.frequency.setValueAtTime(baseFreq, now)
    osc.frequency.exponentialRampToValueAtTime(baseFreq * 0.85, now + 0.03)
    gainNode.gain.setValueAtTime(0, now)
    gainNode.gain.linearRampToValueAtTime(0.95, now + 0.002)
    gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 0.14)
    osc.connect(gainNode)
    gainNode.connect(audioCtx.destination)
    osc.start(now)
    osc.stop(now + 0.14)
  }
}

// ==================== 2. 数据配置 ====================
const shopItems = [
  { id: 'default', name: '原初乌木鱼', price: 0, multiplier: 1, colors: ['#4e4e66', '#2d2d3d', '#1b1b26'], glowColor: 'rgba(139, 92, 246, 0.3)', textColor: '#fbbf24', sound: 'standard' },
  { id: 'cyan_neon', name: '赛博极光鱼', price: 100, multiplier: 3, colors: ['#06b6d4', '#0891b2', '#155e75'], glowColor: 'rgba(6, 182, 212, 0.35)', textColor: '#22d3ee', sound: 'neon' },
  { id: 'purple_void', name: '虚空幽冥鱼', price: 500, multiplier: 10, colors: ['#c084fc', '#7c3aed', '#4c1d95'], glowColor: 'rgba(168, 85, 247, 0.35)', textColor: '#e9d5ff', sound: 'standard' },
  { id: 'golden_buddha', name: '大日如来至尊鱼', price: 3000, multiplier: 50, colors: ['#fde047', '#f59e0b', '#78350f'], glowColor: 'rgba(251, 191, 36, 0.45)', textColor: '#fef08a', sound: 'heavy' }
]

const autoClickUpgrades = [
  { level: 0, rate: 0, cost: 50 },
  { level: 1, rate: 0.5, cost: 200 }, 
  { level: 2, rate: 1.0, cost: 800 }, 
  { level: 3, rate: 2.5, cost: 2500 },
  { level: 4, rate: 6.0, cost: 8000 },
  { level: 5, rate: 15.0, cost: 0 }    
]

const meritCount = ref(Number(localStorage.getItem('cyber_merit_count')) || 0)
const currentFishId = ref(localStorage.getItem('cyber_current_fish_id') || 'default')
const ownedFishIds = ref(JSON.parse(localStorage.getItem('cyber_owned_fish_ids')) || ['default'])
const autoClickLevel = ref(Number(localStorage.getItem('cyber_auto_level')) || 0)

const isStoreOpen = ref(false)
const activeTab = ref('fish') 
const isKnocking = ref(false)
const floatingTexts = ref([])
const canvasRef = ref(null)

// 暴击控制状态
const buddhaActive = ref(false)

let ctx = null
let animationFrameId = null
let autoClickTimer = null
let particles = []
let ripples = [] // 新增 Canvas 冲击波纹队列

const currentFish = computed(() => shopItems.find(item => item.id === currentFishId.value) || shopItems[0])
const autoClickRate = computed(() => autoClickUpgrades[autoClickLevel.value]?.rate || 0)
const upgradeCost = computed(() => autoClickUpgrades[autoClickLevel.value]?.cost || 0)
const isMaxLevel = computed(() => autoClickLevel.value >= autoClickUpgrades.length - 1)
const nextUpgradeRate = computed(() => autoClickUpgrades[autoClickLevel.value + 1]?.rate || autoClickRate.value)

// 自动挂机
const startAutoClicker = () => {
  if (autoClickTimer) clearInterval(autoClickTimer)
  if (autoClickRate.value === 0) return

  const interval = 1000 / autoClickRate.value
  autoClickTimer = setInterval(() => {
    meritCount.value += currentFish.value.multiplier
    localStorage.setItem('cyber_merit_count', meritCount.value)

    playSound(currentFish.value.sound, true)

    if (canvasRef.value && Math.random() > 0.4) {
      const targetRgb = hexToRgb(currentFish.value.colors[0])
      particles.push(new Particle(canvasRef.value.width / 2, canvasRef.value.height / 2, targetRgb))
    }
  }, interval)
}

// ==================== 3. 核心敲击与随机金佛暴击逻辑 ====================
const handlePCKnock = (event) => {
  if ('ontouchstart' in window) return 
  executeKnock(event.clientX, event.clientY, event.currentTarget)
}

const handleMobileKnock = (event) => {
  if (event.touches && event.touches[0]) {
    executeKnock(event.touches[0].clientX, event.touches[0].clientY, event.currentTarget)
  }
}

const executeKnock = (clientX, clientY, currentTarget) => {
  const rect = currentTarget.parentElement.getBoundingClientRect()
  const clickX = clientX - rect.left
  const clickY = clientY - rect.top

  // 1. 独立几率：5% 概率触发【佛光普照】超级功德暴击
  const isCrit = Math.random() < 0.05
  let addedMerit = currentFish.value.multiplier

  if (isCrit) {
    addedMerit = currentFish.value.multiplier * 100 // 100倍暴击功德
    playSound('crit_buddha', false) // 播放神圣金钟大和弦
    triggerBuddhaManifestation() // 激活全息大佛
    triggerRippleEffect(clickX, clickY) // 激发粒子佛光圈
  } else {
    playSound(currentFish.value.sound, false)
  }

  // 更新功德数
  meritCount.value += addedMerit
  localStorage.setItem('cyber_merit_count', meritCount.value)

  // 木鱼物理微弹反馈
  isKnocking.value = true
  setTimeout(() => { isKnocking.value = false }, 80)

  // 构造对应的悬浮浮现飘字
  const textId = Date.now() + Math.random()
  floatingTexts.value.push({ 
    id: textId, 
    x: clickX - 45, 
    y: clickY - 30, 
    isCrit,
    content: isCrit ? `✨ 缘法大爆发功德 +${addedMerit} ✨` : `功德 +${addedMerit}`
  })
  setTimeout(() => { floatingTexts.value = floatingTexts.value.filter(t => t.id !== textId) }, 1200)

  // 炸裂喷射粒子
  const targetRgb = isCrit ? '251, 191, 36' : hexToRgb(currentFish.value.colors[0])
  const count = isCrit ? 50 : ('ontouchstart' in window ? 12 : 22) // 暴击喷发50颗金砂粒子
  for (let i = 0; i < count; i++) {
    particles.push(new Particle(clickX, clickY, targetRgb, isCrit))
  }
}

// 金佛降临动画周期控制
const triggerBuddhaManifestation = () => {
  buddhaActive.value = true
  setTimeout(() => {
    buddhaActive.value = false
  }, 1600) // 1.6秒后法相隐去
}

// 激发佛光光晕涟漪圈
const triggerRippleEffect = (x, y) => {
  ripples.push({
    x, y,
    radius: 10,
    maxRadius: 220,
    alpha: 1,
    speed: 5
  })
}

// ==================== 4. 商店与其他 UI 控制 ====================
const openStore = () => { playSound('ui_click'); isStoreOpen.value = true }
const switchTab = (tab) => { playSound('ui_click'); activeTab.value = tab }

const buyFish = (item) => {
  if (meritCount.value >= item.price && !ownedFishIds.value.includes(item.id)) {
    meritCount.value -= item.price
    ownedFishIds.value.push(item.id)
    currentFishId.value = item.id
    saveToStorage()
    playSound('ui_success')
  }
}

const equipFish = (id) => {
  if (ownedFishIds.value.includes(id)) {
    currentFishId.value = id
    localStorage.setItem('cyber_current_fish_id', id)
    playSound('ui_success')
  }
}

const upgradeAutoClicker = () => {
  if (!isMaxLevel.value && meritCount.value >= upgradeCost.value) {
    meritCount.value -= upgradeCost.value
    autoClickLevel.value++
    saveToStorage()
    startAutoClicker()
    playSound('ui_success')
  }
}

const saveToStorage = () => {
  localStorage.setItem('cyber_merit_count', meritCount.value)
  localStorage.setItem('cyber_owned_fish_ids', JSON.stringify(ownedFishIds.value))
  localStorage.setItem('cyber_current_fish_id', currentFishId.value)
  localStorage.setItem('cyber_auto_level', autoClickLevel.value)
}

const resetGame = () => {
  playSound('ui_click')
  if (confirm('确定要清空所有功德、归还所有法宝并拆卸自动诵经核心吗？')) {
    if (autoClickTimer) clearInterval(autoClickTimer)
    meritCount.value = 0
    currentFishId.value = 'default'
    ownedFishIds.value = ['default']
    autoClickLevel.value = 0
    localStorage.clear()
    particles = []
    ripples = []
  }
}

// ==================== 5. Canvas 粒子与量子佛光涟漪系统 ====================
class Particle {
  constructor(x, y, rgbColor, isGolden = false) {
    this.x = x; this.y = y; this.rgbColor = rgbColor
    const angle = Math.random() * Math.PI * 2
    const speed = isGolden ? (Math.random() * 6 + 2) : (Math.random() * 3.5 + 1.5) // 金佛粒子喷射速度更快
    this.vx = Math.cos(angle) * speed
    this.vy = Math.sin(angle) * speed
    this.radius = isGolden ? (Math.random() * 3 + 1.5) : (Math.random() * 2.2 + 1.2)
    this.alpha = 1
    this.decay = isGolden ? (Math.random() * 0.015 + 0.01) : (Math.random() * 0.022 + 0.015)
  }
  update() { this.x += this.vx; this.y += this.vy; this.vy += 0.04; this.alpha -= this.decay }
  draw() {
    if (!ctx) return
    ctx.save(); ctx.beginPath()
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(${this.rgbColor}, ${this.alpha})`
    ctx.shadowBlur = 10; ctx.shadowColor = `rgba(${this.rgbColor}, 0.9)`
    ctx.fill(); ctx.restore()
  }
}

const hexToRgb = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : '251, 191, 36'
}

const resizeCanvas = () => {
  if (canvasRef.value) {
    canvasRef.value.width = canvasRef.value.parentElement.clientWidth
    canvasRef.value.height = canvasRef.value.parentElement.clientHeight
  }
}

// 全量画布动画帧渲染
const animate = () => {
  if (!ctx || !canvasRef.value) return
  ctx.clearRect(0, 0, canvasRef.value.width, canvasRef.value.height)

  // 1. 绘制并更新量子佛光圈涟漪
  ripples = ripples.filter(ripple => {
    ripple.radius += ripple.speed
    ripple.alpha = 1 - (ripple.radius / ripple.maxRadius)
    
    ctx.save()
    ctx.beginPath()
    ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2)
    ctx.strokeStyle = `rgba(251, 191, 36, ${ripple.alpha})`
    ctx.lineWidth = 4
    ctx.shadowBlur = 15
    ctx.shadowColor = 'rgba(251, 191, 36, 0.7)'
    ctx.stroke()
    ctx.restore()

    return ripple.radius < ripple.maxRadius
  })

  // 2. 绘制并更新常规/爆裂粒子
  particles = particles.filter(p => { p.update(); p.draw(); return p.alpha > 0 })
  
  animationFrameId = requestAnimationFrame(animate)
}

// ==================== 6. 生命周期管理 ====================
onMounted(() => {
  if (canvasRef.value) {
    ctx = canvasRef.value.getContext('2d')
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)
    animate()
  }
  startAutoClicker()

  const unlockEvents = ['click', 'touchstart', 'mousedown']
  const unlock = () => {
    initAudioCtx()
    unlockEvents.forEach(evt => window.removeEventListener(evt, unlock))
  }
  unlockEvents.forEach(evt => window.addEventListener(evt, unlock))
})

onUnmounted(() => {
  window.removeEventListener('resize', resizeCanvas)
  if (animationFrameId) cancelAnimationFrame(animationFrameId)
  if (autoClickTimer) clearInterval(autoClickTimer)
  if (audioCtx) audioCtx.close()
})
</script>

<style scoped>
/* 基础功德飘字动画 */
@keyframes floatUpFade {
  0% { transform: translateY(0) scale(0.85); opacity: 0; }
  12% { transform: translateY(-25px) scale(1.15); opacity: 1; }
  100% { transform: translateY(-85px) scale(0.9); opacity: 0; }
}
.animate-float-up-fade {
  animation: floatUpFade 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

/* 佛光暴击专属大幅飘字动画 */
@keyframes critFloatUp {
  0% { transform: translateY(0) scale(0.5) rotate(-5deg); opacity: 0; }
  15% { transform: translateY(-40px) scale(1.3) rotate(3deg); opacity: 1; }
  30% { transform: translateY(-45px) scale(1.2) rotate(-2deg); opacity: 1; }
  100% { transform: translateY(-120px) scale(0.8) rotate(0deg); opacity: 0; }
}
.animate-crit-float-up {
  animation: critFloatUp 1.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
}

/* 金佛相法身显化出场包络动画 */
@keyframes buddhaManifest {
  0% { transform: scale(0.4) translateY(60px); opacity: 0; filter: blur(10px) brightness(2); }
  20% { transform: scale(1.05) translateY(-5px); opacity: 1; filter: blur(0) brightness(1.2); }
  30% { transform: scale(1) translateY(0); opacity: 1; filter: blur(0) brightness(1); }
  75% { transform: scale(1) translateY(0); opacity: 1; filter: blur(0); }
  100% { transform: scale(0.85) translateY(-50px); opacity: 0; filter: blur(15px) brightness(0.5); }
}
.animate-buddha-manifest {
  animation: buddhaManifest 1.6s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

::-webkit-scrollbar { width: 5px; }
::-webkit-scrollbar-track { background: rgba(0,0,0,0.2); }
::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.15); border-radius: 10px; }
::-webkit-scrollbar-thumb:hover { background: rgba(255, 255, 255, 0.25); }
</style>