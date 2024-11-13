import { Solar, HolidayUtil } from 'lunar-javascript'

interface Solar {
  getMonth(): number
  getDay(): number
  getWeek(): number
  getHour(): number
  next(days: number): Solar
  toYmd(): string
}

const holidayMessagesTemplate = [
  '革命即将胜利，同志们再摸 {d} 天就到{n}了！',
  '距离{n}假期还有 {d} 天！'
]

const motivationalQuotes = [
  '鲁迅曾经说过：如果别人看不见你的电脑屏幕，那么只要你在打字他们就会觉得你在工作。',
  '一个月总有那么三十几天不想上班。',
  '你们上会班吧，我替你们老板求求你们了。',
  '办公室为什么一直弥漫着一股海鲜味？原来都是你们在摸鱼？',
  '工作再疲惫，划水要学会，工作再紧张，摸鱼不能忘。',
  '注意：近期发现有人在偷偷工作，不认真摸鱼！最后警告一次，再有被抓到在工作的，一经发现立即开除，永不录用！',
  '每天坚持带薪拉屎10分钟，每年会多出5.5天的带薪假期。',
  '办公室和同事聊天的时候记得带上笔和本子。',
  '刷微博=跟热点、看B站=找素材、水论坛=做调研。',
  '废文件不要扔，堆在桌子上，这样不但看起来很忙，而且能随时把手机藏起来。',
  '摸鱼的时候要紧皱眉头，不时发出“啧”的声音。',
  '准备一副舒服的耳机，哪怕没在听任何东西也挂着，会减少57.3%不必要的麻烦。',
  '新建一个桌面，摆满文档，Ctrl+Win+方向键，工作摸鱼一键换装。',
  '不要给自己的办公电脑做开机加速，你是在减少自己有偿发呆的总时长。',
  '这一上午没活干还要装作很忙的样子，搞得人心惊胆战的，比干活都累。',
  '建一个闲聊的小群吧，名字叫“XX项目组”。',
  '工作再累，一定不要忘记摸鱼哦！',
  '有事没事起身去茶水间，去厕所，去廊道走走，别老在工位上坐着，钱是老板的，但命是自己的。',
  '上班是帮老板赚钱，摸鱼是赚老板的钱！',
  '在忙啥呢家人们，现在是摸鱼时间，该摸鱼的时候摸鱼，别让自己忙碌起来，老板不会关心你的，只有我会关心你。',
  '认认真真上班，这根本就不叫赚钱，那是用劳动换取报酬。只有偷懒，在上班的时候摸鱼划水，你才是从老板手里赚到了钱。',
  '上班如上坟，不摸鱼对不起自己。',
  '远程会议时，最重要的是时不时冒出一句“我有点卡了”。',
  '如果被老板盯上了，记得随时切到代码或表格页面。',
  '上班是为了摸鱼，摸鱼是为了更好地上班。',
  '天气这么好，不摸鱼真是对不起这天。',
  '周一的工作情绪，全靠摸鱼来缓解。',
  '工位上只要摆上几本厚书，老板就不会怀疑你在摸鱼。',
  '上班的意义是什么？当然是“每月存点小钱出去旅游”。',
  '今天又是划水的一天，期盼被老板忽略。',
  '坐在办公桌前发呆，也是思考的一部分。',
  '即使在上班，也可以做一些对生活有帮助的事，比如安排晚饭菜单。',
  '上班摸鱼是一门艺术，千万别被老板发现。',
  '加班其实是摸鱼的延长，不算加班费的话。',
  '摸鱼时间，记得做出一副沉思的表情。'
]

const lastDayTips = [
  '最后一天坚持住！',
  '今天注定要一直肚子痛了！',
  '如果一个人在周五并没有显得特别高兴，说明他周一到周四都在摸鱼。'
]

const solarDate = Solar.fromDate(new Date())
const currentHour = solarDate.getHour()

const getGreeting = (hour: number): string => {
  if (hour >= 0 && hour <= 4) return '起来嗨'
  if (hour <= 7) return '早安'
  if (hour <= 11) return '上午好'
  if (hour <= 13) return '吃了吗'
  if (hour <= 17) return '下午好'
  return hour <= 18 ? '下班没' : '上王者'
}

const getNextHoliday = (date: Solar): { days: number; name: string } => {
  let holidayName = ''
  let daysCounter = 0

  while (daysCounter < 400) {
    const holiday = HolidayUtil.getHoliday(date.toYmd())
    if (holiday && !holiday.isWork()) {
      holidayName = holiday.getName()
      break
    } else if (date.getWeek() === 0 || date.getWeek() === 6) {
      holidayName = '周末'
      break
    }
    date = date.next(1)
    daysCounter++
  }
  return { days: daysCounter, name: holidayName }
}

const getNextLongHoliday = (date: Solar, skipCount = 0): { days: number; name: string } => {
  let holidayName = ''
  let daysCounter = 0
  let skippedHolidays = 0

  while (daysCounter < 400) {
    const holiday = HolidayUtil.getHoliday(date.toYmd())
    if (holiday && !holiday.isWork()) {
      if (skippedHolidays >= skipCount) {
        holidayName = holiday.getName()
        break
      }
      skippedHolidays++
    }
    date = date.next(1)
    daysCounter++
  }
  return { days: daysCounter, name: holidayName }
}

const messages = [
  `${solarDate.getMonth()}月${solarDate.getDay()}日${getGreeting(currentHour)}，摸鱼人！`,
  motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)]
]

const nextHoliday = getNextHoliday(solarDate)
if (nextHoliday.days === 0) {
  messages.push(lastDayTips[Math.floor(Math.random() * lastDayTips.length)])
} else if (nextHoliday.days > 0) {
  messages.push(
    holidayMessagesTemplate[Math.floor(Math.random() * holidayMessagesTemplate.length)]
      .replace('{d}', nextHoliday.days.toString())
      .replace('{n}', nextHoliday.name)
  )
}

const upcomingHolidayMessages: string[] = []
for (let i = 0; i < 6; i++) {
  const longHoliday = getNextLongHoliday(solarDate, i)
  if (longHoliday.days > 0 && longHoliday.name) {
    upcomingHolidayMessages.push(`距离${longHoliday.name}假期还有 ${longHoliday.days} 天！`)
  }
}

upcomingHolidayMessages.forEach(message => {
  if (!messages.includes(message)) messages.push(message)
})

export default messages
