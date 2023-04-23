let movement = {
	chestItem: [{
			img: 'Bench-Press',
			name: '杠铃卧推',
			detail: '躺在长凳上，双脚牢牢地放在地板上。抓住比肩宽宽的杠铃并将其从立柱上抬起。',
			steps: '双臂完全伸展，将杠铃置于胸前。这是起始位置。吸气并将杠铃降低到上胸部。继续，直到杠铃略高于您的胸部。暂停 1 秒，然后用爆发力将杠铃拉回到起始位置。重复。'
		},
		{
			img: 'Butterfly-Chest-Clip',
			name: '蝴蝶机夹胸',
			detail: '坐在飞鸟器上，背部牢牢压在靠背上。抓住与肩同高的杠杆。向内旋转你的肩膀，使你的手腕、肘部和肩膀保持水平。',
			steps: '保持肘部略微弯曲，将杠杆推到一起时呼气。反向运动时吸气，直到您感到胸部或肩膀有轻微的伸展。重复。'
		},
		{
			img: 'Decline-Barbell-Bench-Press',
			name: '下斜杠铃卧推',
			detail: '将双脚锁定在下倾式长凳的腿部支架下，然后仰卧。使用比肩宽稍宽的握把，将杠铃从架子上卸下。在握住杠铃的同时，收回你的肩胛骨（将它们推到一起）并伸直你的手腕。',
			steps: '保持肘部稍微内收，吸气，同时将杠铃放低至胸部。将杠铃推回起始位置时呼气。重复。'
		},
		{
			img: 'Decline-Dumbbell-Bench-Press',
			name: '下斜哑铃卧推',
			detail: '每只手各拿一个哑铃，坐在下倾式长凳的一端，将哑铃放在膝盖上。你也可以让训练伙伴在你坐下后把哑铃递给你。将脚牢固地钩在脚垫下。仰卧（仰卧），将哑铃放在胸部两侧，手腕旋前（背对自己）。你的肘部应该弯曲并稍微向两侧收拢。',
			steps: '向上和向内按压哑铃时呼气，直到手臂几乎完全伸展并且哑铃几乎接触。吸气，同时将哑铃降低到起始位置，直到您感觉到肩膀或胸部有轻微的拉伸。重复规定的重复次数。'
		},
		{
			img: 'Dumbbell-Bench-Press',
			name: '哑铃平板卧推',
			detail: '双手各拿一个哑铃，坐在平坦的长凳上，双膝各放一个哑铃。当你躺在长凳上时，将每个哑铃踢到位，一次一个。将哑铃放在胸部两侧，双臂弯曲成 90 度角。您的肘部不应笔直指向两侧；相反，将它们折叠成大约 45 度角。张开双腿，将双脚向后放，然后将它们稳固地放在地面上。你的脚趾或脚后跟应该牢牢地放在地板上。拱起你的背部并伸直你的手腕。',
			steps: '慢慢向上和向内按压哑铃，直到手臂几乎完全伸展并且哑铃几乎接触时呼气。慢慢地将哑铃放回起始位置时吸气，或者直到您感到胸部有轻微的拉伸。重复。'
		},
		{
			img: 'Dumbbell-Flye',
			name: '哑铃飞鸟',
			detail: '手持一对哑铃，坐在平坦的长凳上，将哑铃放在膝盖上。仰卧在长凳上，同时将哑铃向上踢到胸部上方的位置，一次一个。张开双腿，将脚平放在地板上。稍微弯曲你的肘部，并向内旋转你的肩膀，使你的肘部指向两侧。拱起你的背部，挺起你的胸部。',
			steps: '吸气，同时将哑铃以弧形动作向两侧放低，直到您感到胸部轻微伸展。反向运动时呼气，直到哑铃几乎垂直。重复。'
		},
		{
			img: 'Push-Ups',
			name: '俯卧撑',
			detail: '双手分开与肩同宽站立，脚趾与地板平行。',
			steps: '让你的手臂完全伸展，让你的身体在一条直线上。这是起始位置。吸气并降低你的身体，直到你的胸部靠近地板。重复。'
		},
		{
			img: 'Weighted-Push-Ups',
			name: '负重俯卧撑',
			detail: '进入俯卧撑位置。你应该用手和前脚支撑你的身体。你的身体应该笔直而僵硬，你的手应该比肩宽。让训练伙伴在您的背上放一块配重板，他或她必须在整个练习过程中牢牢握住它。',
			steps: '保持身体挺直和僵硬，吸气，同时弯曲肘部，将胸部放低到地板上。将身体推回起始位置时呼气，直到肘部完全伸展。重复规定的重复次数。完成后，让您的训练伙伴从您的背部取下配重板。不要像视频中那样试图转动你的躯干并把盘子扔掉。'
		},
	],
	legItem: [{
			img: 'Barbell-Front-Squat',
			name: '前蹲',
			detail: '将杠铃放在上胸部高度的架子上。踩在杠铃下面，让它靠在你的肩膀前面，将手指放在杠铃下面，肘部指向前方（如果你不能灵活地将手指放在杠铃下面，你可以交叉双臂并放在 双手放在杠铃上）。卸下杠铃，小心地向后退一步。 你的脚应该分开与肩同宽，并稍微向外指向。',
			steps: '下蹲时吸气，同时向后推臀部并向前弯曲膝盖。 保持躯干直立，并至少下降直到膝盖弯曲成 90 度角。将身体推回起始位置时呼气，通过脚后跟发力并保持躯干直立。重复。'
		},
		{
			img: 'Barbell-Hip-Punch',
			name: '臀冲',
			detail: '将一个负重的杠铃放在长凳旁边并平行于长凳。将双腿滑到杠铃下方，然后坐在地板上，背部靠在长凳的一侧。杠铃应该在你的臀部上方。抓住两侧的杠铃。弯曲膝盖，将双脚平放在地板上，大约与肩同宽。',
			steps: '保持躯干僵硬，在举起杠铃时呼气，伸展臀部直至完全伸展。保持数到二并挤压臀大肌。通过弯曲臀部降低杠铃时吸气。不要让杠铃接触地板。重复。'
		},
		{
			img: 'Barbell-Lunge',
			name: '杠铃箭步蹲',
			detail: '站立，将杠铃置于肩后。',
			steps: '单腿向前迈出一大步（弓步）时呼气，先用脚后跟着地，然后放下前脚掌。同时，保持躯干直立，降低身体，直到支撑腿的膝盖几乎接触到地板。吸气，同时用脚后跟向后推，然后回到起始位置。用你的另一条腿重复。'
		},
		{
			img: 'Barbell-Single-Hip-Thrust',
			name: '单腿臀冲',
			detail: '将负重的杠铃平行于长凳放置。坐在地板上，臀部位于杠铃下方，背部靠在长凳的一侧。抓住每一侧的横杆。弯曲双膝，将双脚平放在地板上。',
			steps: '保持你的躯干僵硬，通过伸展一条腿的臀部直到臀部完全伸展来举起杠铃时呼气。保持数到二并挤压臀部。通过弯曲臀部降低杠铃时吸气。不要让杠铃接触地板。重复更多次。用你的另一条腿重复这些动作。'
		},
		{
			img: 'Barbell-Squat',
			name: '杠铃深蹲',
			detail: '将杠铃放在立柱上，高度刚好高于锁骨的高度。 弯下腰，用脖子和肩膀的底部接触杠铃，将自己带到杠铃下方。',
			steps: '抓住左右两侧的杠铃，将其从立柱上抬起。后退一步，双脚分开与肩同宽站立。 这是你的起始位置。 通过向后推臀部和向前推胸部来吸气并降低身体。 继续，直到达到下蹲位置（大腿与地板成 45 度角）。 停顿 1 秒，呼气，将身体抬起至原位。 重复。'
		},
		{
			img: 'Bulgarian-Barbell-Squat',
			name: '保加利亚杠铃深蹲',
			detail: '将杠铃放在肩膀后部，并在两侧牢牢抓住它。背对着长凳的一侧站立。将一只脚的脚背放在身后的长凳上，这样只有一只脚接触地板。',
			steps: '保持躯干直立，用支撑腿蹲下时吸气，直到后腿的膝盖几乎接触到地板。将自己推回到起始位置时呼气。重复所需的重复次数。用你的另一条腿重复这些动作。'
		},
		{
			img: 'Bulgarian-Dumbbell-Squat',
			name: '保加利亚哑铃深蹲',
			detail: '抓住一对哑铃，将它们放在身体两侧。背对着长凳的一侧站立，在你和长凳之间留出几英尺的空间。向后抬起一条腿，将脚背放在长凳上。',
			steps: '保持躯干直立，用支撑腿蹲下时吸气，直到支撑腿的膝盖成 90 度角或后腿的膝盖几乎接触到地板。将自己推回到起始位置时呼气。重复更多次。用你的另一条腿重复这个练习。'
		},
		{
			img: 'Dead-Lift',
			name: '硬拉',
			detail: '双脚站在杠铃下方，与臀部同宽。当你向下看时，杠铃应该在你脚的一半以上。弯下腰，用与肩同宽的握距抓住杠铃。稍微抬起臀部，挺直背部，身体向后倾斜，使躯干保持直立。',
			steps: '深吸一口气后，站立并将杠铃拉到腿前，用双腿带动。在动作的最高点，挤压臀大肌，向后拉肩膀，然后呼气。要将杠铃放回地面，请将臀部向后推，弯曲臀部，然后将杠铃降低到腿的前方，保持背部挺直。一旦杠铃通过你的膝盖，弯曲你的膝盖并将杠铃降低到地面。'
		},
		{
			img: 'Hex-Barbell-Deadlift',
			name: '六角杠铃硬拉',
			detail: '双脚分开与肩同宽，站在有负荷的单杠内。蹲下并抓住杆的手柄。深吸一口气。',
			steps: '保持躯干直立，双臂和背部挺直，呼气，同时将单杠提升到站立位置。在动作的最高点，挤压臀大肌并向后拉肩膀。吸气，同时通过先向后推动臀部然后弯曲膝盖将单杠放回地面。重复规定的重复次数。'
		},
		{
			img: 'High-Box-Squat',
			name: '高箱深蹲',
			detail: '站在箱子或长凳前，将杠铃放在肩前，双手交叉放在杠铃上以保持稳定。双脚分开，使其比肩宽稍宽（即比常规杠铃前蹲更宽）。将你的脚和膝盖指向同一方向对角线。',
			steps: '保持躯干直立，慢慢蹲下时吸气，首先将臀部向后推，然后将膝盖向外推。当你的屁股接触到盒子时停下来并保持一秒钟。 不要坐在箱子上向后摇晃。向上弹回时呼气，不要向前摇晃。重复规定的重复次数。'
		},
		{
			img: 'Seated-Hip-Abduction',
			name: '坐姿髋内收',
			detail: '坐在内收器械上，将其调节至 45-60 度开口',
			steps: '你的大腿应该接触到垫子，你应该已经感觉到轻微的拉力。吸气并向内压，闭合双腿。当垫子接触时暂停 1 秒钟。呼气并回到起始位置。重复'
		},
		{
			img: 'Seated-Hip-Adduction',
			name: '坐姿髋外展',
			detail: '坐在坐姿髋关节外展机上，双腿放在垫子内。拉动侧杆，让双腿并拢。松开侧杆以将腿锁定到位。向后躺下，抓住身体两侧的把手',
			steps: '呼气，同时用膝盖推动垫子，直到臀部完全外展。保持数到二。反向运动时吸气，双腿回到起始位置。重复规定的重复次数。'
		},
		{
			img: 'Squat',
			name: '自重深蹲',
			detail: '双脚分开与肩同宽站立。你的膝盖和脚应该指向同一个方向。在你面前举起你的手臂以保持平衡（或者你可以将它们放在你身边并在下降时抬起它们）。',
			steps: '保持头部向上和躯干直立，在下蹲时吸气，同时弯曲臀部和膝盖，确保至少下降到大腿与地板平行。（如果你的手臂在身体两侧，在你下降时将它们举到你面前以帮助你保持平衡。）回到起始位置时呼气。重复规定的重复次数。'
		},
		{
			img: 'Zech-Squat',
			name: '泽奇深蹲',
			detail: '将杠铃放在齐腰高的架子上并加载。保持你的肘部向身体两侧收拢，用你的肘部弯举起杠铃，将其拉入你的身体，然后将你的手腕交叉在杠铃上以将其固定到位。小心地从架子上向后退一步，并以宽站距站立，膝盖和脚指向同一方向的对角线。',
			steps: '保持背部挺直和身体直立，吸气，下蹲直到杠铃碰到大腿。当你站回起始位置时呼气，通过你的脚后跟发力。重复。'
		}
	],
	absItem: [{
			img: 'Crunch',
			name: '卷腹',
			detail: '躺在地上，弯曲双腿并稍微打开与肩同宽。确保你的脚底完全接触地面。双手放在头侧或胸前。确保整个腰部接触地面。',
			steps: '将你的臀部轻轻压入地面并收紧你的腹肌，将你的肚脐拉向你的脊柱。保持肘部向两侧。你的下巴相对较高，目光注视着天​​花板。 不要向后仰头。深吸一口气，慢慢抬起上半身，直到肩胛骨离开地面。在努力过程中呼气，将骨盆压入地面，在最终位置保持一会儿。吸气时慢慢回到起始位置。'
		},
		{
			img: 'Hanging-Leg-Raise',
			name: '悬挂抬腿',
			detail: '使用与肩同宽的旋前（正手）握把悬挂在杠铃上。伸直你的下背部，使你的下背部尽可能少的弓形。',
			steps: '保持身体不动，下背部挺直，双腿并拢，呼气，同时通过弯曲臀部慢慢抬起膝盖。保持数到二。吸气，同时伸展臀部，慢慢将膝盖放低至起始位置。重复规定的重复次数。'
		},
		{
			img: 'Rope-Kneeling-Crunch',
			name: '跪姿绳索卷腹',
			detail: '跪在高滑轮前。每只手抓住绳索附件的一端，将手腕靠在头的两侧。通过弯曲你的臀部来降低你的躯干，但让绳子的重量抬起你的上半身，这样你的下背部就会伸展（向上弯曲）。',
			steps: '保持臀部固定，通过弯曲腹部向下拉绳索时呼气，使背部呈弓形。保持数到二。吸气，放松腹部，让绳子抬起上半身，使下背部恢复伸展状态。重复。'
		},
		{
			img: 'Russian-Twist',
			name: '俄罗斯转体',
			detail: '使用与肩同宽的旋前（正手）握法站立握住杠铃。',
			steps: '将肘部放在身体两侧，呼气，同时向上卷曲杠铃，直到前臂几乎垂直。以可控的方式将杠铃放回起始位置时吸气。重复。'
		},
		{
			img: 'Sit-Ups',
			name: '仰卧起坐',
			detail: '仰卧（仰卧），双腿弯曲，双脚平放在地上。将双手轻轻放在头后或两侧，保持肘部向外。',
			steps: '保持下背部平放在地板上，通过弯曲腹部将头部和肩膀抬离地面几英寸。这样做时呼气。保持收缩姿势数两下。将头和肩膀放低至起始位置时吸气。重复。'
		},
	],
	bicepsItem: [{
			img: 'Barbell-Forehand-Curl',
			name: '正手杠铃弯举',
			detail: '使用与肩同宽的旋前（正手）握法站立握住杠铃。',
			steps: '将肘部放在身体两侧，呼气，同时向上卷曲杠铃，直到前臂几乎垂直。以可控的方式将杠铃放回起始位置时吸气。重复。'
		},
		{
			img: 'Dumbbell-Concentration-Curl',
			name: '哑铃集中弯举',
			detail: '坐在长凳上，双脚分开，中间放一个哑铃。用一只手将哑铃抬离地面。将肘部放在大腿上。',
			steps: '保持手臂完全向下伸展，哑铃不要接触地板。这是起始位置。以平稳的拱形动作向前和向上弯曲杠铃，并在呼气时收缩二头肌。继续向上，直到哑铃与肩同高。挤压二头肌数 1 秒。将杠铃放回起始位置并吸气。不要向下摆动杠铃。重复多次，然后换手。'
		},
		{
			img: 'Dumbbell-Curl',
			name: '哑铃弯举',
			detail: '使用中性握法（手掌朝内）站立，在身体两侧握住一对哑铃。把你的肩膀向后拉。',
			steps: '慢慢地将一个哑铃卷曲到肩膀上时呼气。随着哑铃的上升，逐渐将前臂旋后，使手掌在弯举的顶部朝向肩膀。一旦你的肘部完全弯曲，让你的肘部向前移动一点（肩部弯曲），直到你的前臂垂直。保持数到二并挤压二头肌。吸气，慢慢以一半的速度反向运动，并将哑铃放回起始位置。用相反的手臂重复相同的动作，然后交替重复。'
		},
		{
			img: 'Dumbbell-Hammer-Preacher-Curl',
			name: '牧师凳锤式弯举',
			detail: '拿着一对哑铃，坐在牧师凳上。保持肘部弯曲，手掌相对（自然握法或锤式握法），将上臂后侧平放在扶手上。',
			steps: '放下哑铃时吸气，直到肘部几乎完全伸展。将哑铃向肩部卷曲时呼气。在动作的最高点保持数二，然后挤压二头肌。重复。'
		},
		{
			img: 'Dumbbell-Overhand-Curl',
			name: '哑铃正手弯举',
			detail: '每只手各拿一个哑铃站立。将手腕旋前成与肩同宽的反握（正手）握法。',
			steps: '将肘部放在身体两侧，呼气，同时将哑铃向肩膀方向卷曲，直到前臂几乎垂直。保持数到二并挤压二头肌。将哑铃放回起始位置时吸气。重复。'
		},
		{
			img: 'ez-Bar-Curl',
			name: 'ez杆弯举',
			detail: '使用与肩同宽的反握（手掌朝上）握住 EZ 弯举杆站立。你的肘部应该几乎完全伸展，杠铃应该靠在你的大腿上。',
			steps: '将上臂固定在身体两侧，呼气，同时将 EZ-curl 杠铃向上卷曲至肩部。在运动的最高点，保持数二并挤压二头肌。以可控的方式将 EZ-curl 杆降低到起始位置时吸气。重复。'
		},
		{
			img: 'Rope-Curl',
			name: '绳索弯举',
			detail: '将一根杆连接到滑轮上。使用与肩同宽的旋后（反手）握法抓住杠铃。站在离滑轮大约一英尺远的地方，稍微向后倾斜。你的肘部应该在你的身体两侧，你的手臂应该几乎完全伸展，并且应该拉紧绳索。',
			steps: '保持身体不动，呼气，同时将杠铃向肩膀方向卷曲，直到肘部完全弯曲。一旦你的肘部完全弯曲，让它们向前移动一点（肩部弯曲），直到你的前臂垂直。保持数到二并挤压二头肌。将杠铃降低到起始位置时吸气，肘部放在身体两侧，手臂几乎完全伸展。重复。'
		},

	],
	backItem: [{
			img: 'Backhand-Barbell-Row',
			name: '反手杠铃划船',
			detail: '使用与肩同宽的反握（反手）握住杠铃，双脚分开与臀部同宽站立。弯曲你的臀部和膝盖，以 45 度角向前倾斜。你的手臂应该几乎完全伸展，杠铃应该放在你的大腿上。',
			steps: '保持头部向上，背部挺直，将杠铃拉至腰部时呼气。保持数到二并挤压背部肌肉。以可控的方式将杠铃降低到起始位置时吸气。重复。'
		},
		{
			img: 'Barbell-Row',
			name: '杠铃划船',
			detail: '正手握住杠铃，双手分开略宽于肩宽弯曲膝盖，将杠铃放在大腿上，身体前倾。',
			steps: '腰部呈自然曲线，挺胸。背部呈 30 度角，手臂完全伸展。这是起始位置。吸气并将杠铃拉向自己，用大腿挤压直到它轻轻接触腹部。呼气并将杠铃降低到起始位置。重复。'
		},
		{
			img: 'Dumbbell-Row',
			name: '哑铃划船',
			detail: '左手持哑铃，右膝跪在长凳上，右臂支撑身体。哑铃应该垂直向下，左臂几乎完全伸展。',
			steps: '将哑铃拉到腰部一侧时呼气。保持数到二。将哑铃放低至起始位置时吸气。重复所需的重复次数。用你的右臂重复。'
		},
		{
			img: 'High-Pull-Down-Rope',
			name: '高位绳索下拉',
			detail: '坐在滑轮前的长凳上。',
			steps: '连接一个闭合的 V 形握把，双臂完全伸过头顶抓住它。这是起始位置吸气并将把手拉向你，同时稍微向后倾斜。暂停 1 秒钟，然后回到起始位置。重复'
		},
		{
			img: 'Lever-Bent-Over-Row',
			name: 'T杆划船',
			detail: '站立，两腿之间夹着一颗上膛的地雷。弯曲臀部并稍微弯曲膝盖，用双手抓住板正下方的地雷杆。您可以将手指相互交叉，也可以将一只手放在另一只手上。除了抓住地雷杆，您还可以在其周围钩一个双排杆。你的背部应该是直的并且接近水平。',
			steps: '保持肘部靠近身体，将地雷拉到胸前时呼气。保持数到二并挤压背部肌肉。以可控的方式放下地雷时吸气，直到肩膀向下伸展。不要让地雷接触地板。重复。'
		},
		{
			img: 'Prone-Incline-Wide-Grip-Upright-Row',
			name: '上斜仰卧宽距划船',
			detail: '握住负重的杠铃，握法与肩同宽，旋前（正手）握法，俯卧（正面）在倾斜 45 度或更多度的长凳上，让杠铃笔直垂下。',
			steps: '将杠铃拉到下胸部时呼气。保持数到二。将杠铃降低到起始位置时吸气。重复规定的重复次数。'
		},
		{
			img: 'Pull-Up',
			name: '引体向上',
			detail: '用比肩宽更宽的旋前（正手）握把抓住杠铃。悬垂时双臂和肩膀完全伸展。',
			steps: '向上拉身体时呼气，直到下巴高于杠铃。保持数到二并挤压背部肌肉。降低身体时吸气，直到手臂和肩膀完全伸展。重复。'
		},
		{
			img: 'Wide-Pull-Downs',
			name: '高位下拉',
			detail: '坐在滑轮前的长凳上。',
			steps: '连接一个闭合的 V 形握把，双臂完全伸过头顶抓住它。这是起始位置吸气并将把手拉向你，同时稍微向后倾斜。暂停 1 秒钟，然后回到起始位置。重复'
		}
	],
	tricepsItem: [{
			img: 'Barbell-Skull-Crusher',
			name: '碎颅者',
			detail: '仰卧（仰卧）在平坦的长凳上。使用旋前（正手）、与肩同宽的握法卸下杠铃，将杠铃举过前额，使手臂略微向后倾斜。',
			steps: '保持上臂不动，吸气，同时弯曲肘部，以平滑的半圆形运动将杠铃朝前额放低。反向运动时呼气，并通过伸展肘部将杠铃推回起始位置。重复规定的重复次数。'
		},
		{
			img: 'Bent-Knee-Bench-Dip',
			name: '仰卧撑',
			detail: '坐在长凳的一侧，将双手放在长凳的边缘，靠近臀部。稍微向前移动你的脚，让你的臀部离开长凳，这样你的体重由你的手臂支撑，你的膝盖弯曲成 90 度角。',
			steps: '保持躯干直立，肘部靠近身体，吸气，同时弯曲肘部降低身体。通过伸展肘部抬起身体时呼气。重复。'
		},
		{
			img: 'Close-Grip-Push-Up',
			name: '窄距俯卧撑',
			detail: '四肢着地，双手放在肩膀正下方或靠得更近。向后伸展双脚并伸直身体。',
			steps: '保持身体挺直，肘部内收，吸气，同时将胸部放低到双手上。将身体推回起始位置时呼气。重复。'
		},
		{
			img: 'Reverse-Grip-Triceps-Pushdown',
			name: '反手三头绳索臂屈伸',
			detail: '首先在高位滑轮机上设置杆附件（直杆或 ez）。面向杠铃附件，手掌朝上（反握）抓住它，与肩同宽。',
			steps: '使用你的背阔肌降低杠铃，直到你的手臂完全伸展到身体两侧。肘部应在身体两侧，双脚应与肩同宽。这是起始位置。吸气时慢慢抬起杠铃附件，使其与胸部对齐。只有前臂应该移动，肘部/上臂应该始终固定在你身边。然后开始将电缆杆降低到原来的凝视位置，同时用力呼气并收缩三头肌。重复推荐的重复次数。'
		},
		{
			img: 'Seated-Bent-Over-Two-Arm-Dumbbell-Kickback',
			name: '坐姿俯身哑铃双手臂屈伸',
			detail: '使用中性握法或锤式握法（手掌朝向身体）握住一对哑铃，坐在长凳上。保持你的上臂固定在你的身体两侧，向前倾直到你的躯干几乎水平。你的背部应该挺直。将你的上臂抬高一点，直到它们水平。你的肘部应该弯曲90度。',
			steps: '保持上臂水平，在将哑铃向身后伸展时呼气，直到前臂水平。保持数到二。慢慢将哑铃放低至起始位置时吸气。重复。'
		},
		{
			img: 'Seated-Dumbbell-Overhead-Triceps-Extension',
			name: '坐姿哑铃过头臂屈伸',
			detail: '拿着哑铃，坐在平坦的长凳或椅子上，将哑铃放在单膝上。用双手抓住哑铃杆的底部，一只手放在另一只手上。用膝盖踢起哑铃，将哑铃的另一端放在肩膀上。将哑铃举过肩部并握在背后，上臂垂直，肘部弯曲。',
			steps: '保持肘部靠近头部，上臂垂直，通过伸展肘部举起哑铃时呼气。重复。'
		},
		{
			img: 'Standing-Barbell-Dips',
			name: '站姿杠铃臂屈伸',
			detail: '双脚分开与肩同宽站立，正手握住杠铃。双手的距离应小于肩宽。',
			steps: '将杠铃举过头顶，双臂完全伸展。这是起始位置。吸气并降低头后的杠铃，直到前臂接触二头肌。暂停 1 秒，回到起始位置。重复'
		},
		{
			img: 'Triceps-Dip',
			name: '窄距双杆臂屈伸',
			detail: '安装与肩同宽的倾角杆并伸直手臂，使双腿悬空。',
			steps: '保持肘部内收，身体直立，慢慢降低身体，直到肘部形成 90 度角或感觉到肩膀轻微拉伸。不要忘记吸气。将身体推回起始位置时呼气。重复推荐的重复次数。'
		},
		{
			img: 'Triceps-Rope-Push-Down',
			name: '绳索臂屈伸',
			detail: '站在滑轮下方，用中立握法抓住绳索附件的两端（手掌彼此相对）。将肘部向两侧拉，臀部稍微前倾，保持背部挺直。',
			steps: '伸展肘部并向下推绳索时呼气。当你的手臂伸展时，扭动你的手腕，使你的手掌在运动结束时朝下。反向运动时吸气，将绳索放回起始位置。重复。'
		}
	]

}

const select_movement = {
	chestItem: [{
			img: 'Bench-Press',
			name: '杠铃卧推',
			detail: '躺在长凳上，双脚牢牢地放在地板上。抓住比肩宽宽的杠铃并将其从立柱上抬起。',
			steps: '双臂完全伸展，将杠铃置于胸前。这是起始位置。吸气并将杠铃降低到上胸部。继续，直到杠铃略高于您的胸部。暂停 1 秒，然后用爆发力将杠铃拉回到起始位置。重复。',
			select:false
		},
		{
			img: 'Butterfly-Chest-Clip',
			name: '蝴蝶机夹胸',
			detail: '坐在飞鸟器上，背部牢牢压在靠背上。抓住与肩同高的杠杆。向内旋转你的肩膀，使你的手腕、肘部和肩膀保持水平。',
			steps: '保持肘部略微弯曲，将杠杆推到一起时呼气。反向运动时吸气，直到您感到胸部或肩膀有轻微的伸展。重复。',
			select:false
		},
		{
			img: 'Decline-Barbell-Bench-Press',
			name: '下斜杠铃卧推',
			detail: '将双脚锁定在下倾式长凳的腿部支架下，然后仰卧。使用比肩宽稍宽的握把，将杠铃从架子上卸下。在握住杠铃的同时，收回你的肩胛骨（将它们推到一起）并伸直你的手腕。',
			steps: '保持肘部稍微内收，吸气，同时将杠铃放低至胸部。将杠铃推回起始位置时呼气。重复。',
			select:false
		},
		{
			img: 'Decline-Dumbbell-Bench-Press',
			name: '下斜哑铃卧推',
			detail: '每只手各拿一个哑铃，坐在下倾式长凳的一端，将哑铃放在膝盖上。你也可以让训练伙伴在你坐下后把哑铃递给你。将脚牢固地钩在脚垫下。仰卧（仰卧），将哑铃放在胸部两侧，手腕旋前（背对自己）。你的肘部应该弯曲并稍微向两侧收拢。',
			steps: '向上和向内按压哑铃时呼气，直到手臂几乎完全伸展并且哑铃几乎接触。吸气，同时将哑铃降低到起始位置，直到您感觉到肩膀或胸部有轻微的拉伸。重复规定的重复次数。',
			select:false
		},
		{
			img: 'Dumbbell-Bench-Press',
			name: '哑铃平板卧推',
			detail: '双手各拿一个哑铃，坐在平坦的长凳上，双膝各放一个哑铃。当你躺在长凳上时，将每个哑铃踢到位，一次一个。将哑铃放在胸部两侧，双臂弯曲成 90 度角。您的肘部不应笔直指向两侧；相反，将它们折叠成大约 45 度角。张开双腿，将双脚向后放，然后将它们稳固地放在地面上。你的脚趾或脚后跟应该牢牢地放在地板上。拱起你的背部并伸直你的手腕。',
			steps: '慢慢向上和向内按压哑铃，直到手臂几乎完全伸展并且哑铃几乎接触时呼气。慢慢地将哑铃放回起始位置时吸气，或者直到您感到胸部有轻微的拉伸。重复。',
			select:false
		},
		{
			img: 'Dumbbell-Flye',
			name: '哑铃飞鸟',
			detail: '手持一对哑铃，坐在平坦的长凳上，将哑铃放在膝盖上。仰卧在长凳上，同时将哑铃向上踢到胸部上方的位置，一次一个。张开双腿，将脚平放在地板上。稍微弯曲你的肘部，并向内旋转你的肩膀，使你的肘部指向两侧。拱起你的背部，挺起你的胸部。',
			steps: '吸气，同时将哑铃以弧形动作向两侧放低，直到您感到胸部轻微伸展。反向运动时呼气，直到哑铃几乎垂直。重复。',
			select:false
		},
		{
			img: 'Push-Ups',
			name: '俯卧撑',
			detail: '双手分开与肩同宽站立，脚趾与地板平行。',
			steps: '让你的手臂完全伸展，让你的身体在一条直线上。这是起始位置。吸气并降低你的身体，直到你的胸部靠近地板。重复。',
			select:false
		},
		{
			img: 'Weighted-Push-Ups',
			name: '负重俯卧撑',
			detail: '进入俯卧撑位置。你应该用手和前脚支撑你的身体。你的身体应该笔直而僵硬，你的手应该比肩宽。让训练伙伴在您的背上放一块配重板，他或她必须在整个练习过程中牢牢握住它。',
			steps: '保持身体挺直和僵硬，吸气，同时弯曲肘部，将胸部放低到地板上。将身体推回起始位置时呼气，直到肘部完全伸展。重复规定的重复次数。完成后，让您的训练伙伴从您的背部取下配重板。不要像视频中那样试图转动你的躯干并把盘子扔掉。',
			select:false
		},
	],
	legItem: [{
			img: 'Barbell-Front-Squat',
			name: '前蹲',
			detail: '将杠铃放在上胸部高度的架子上。踩在杠铃下面，让它靠在你的肩膀前面，将手指放在杠铃下面，肘部指向前方（如果你不能灵活地将手指放在杠铃下面，你可以交叉双臂并放在 双手放在杠铃上）。卸下杠铃，小心地向后退一步。 你的脚应该分开与肩同宽，并稍微向外指向。',
			steps: '下蹲时吸气，同时向后推臀部并向前弯曲膝盖。 保持躯干直立，并至少下降直到膝盖弯曲成 90 度角。将身体推回起始位置时呼气，通过脚后跟发力并保持躯干直立。重复。',
			select:false
		},
		{
			img: 'Barbell-Hip-Punch',
			name: '臀冲',
			detail: '将一个负重的杠铃放在长凳旁边并平行于长凳。将双腿滑到杠铃下方，然后坐在地板上，背部靠在长凳的一侧。杠铃应该在你的臀部上方。抓住两侧的杠铃。弯曲膝盖，将双脚平放在地板上，大约与肩同宽。',
			steps: '保持躯干僵硬，在举起杠铃时呼气，伸展臀部直至完全伸展。保持数到二并挤压臀大肌。通过弯曲臀部降低杠铃时吸气。不要让杠铃接触地板。重复。',
			select:false
		},
		{
			img: 'Barbell-Lunge',
			name: '杠铃箭步蹲',
			detail: '站立，将杠铃置于肩后。',
			steps: '单腿向前迈出一大步（弓步）时呼气，先用脚后跟着地，然后放下前脚掌。同时，保持躯干直立，降低身体，直到支撑腿的膝盖几乎接触到地板。吸气，同时用脚后跟向后推，然后回到起始位置。用你的另一条腿重复。',
			select:false
		},
		{
			img: 'Barbell-Single-Hip-Thrust',
			name: '单腿臀冲',
			detail: '将负重的杠铃平行于长凳放置。坐在地板上，臀部位于杠铃下方，背部靠在长凳的一侧。抓住每一侧的横杆。弯曲双膝，将双脚平放在地板上。',
			steps: '保持你的躯干僵硬，通过伸展一条腿的臀部直到臀部完全伸展来举起杠铃时呼气。保持数到二并挤压臀部。通过弯曲臀部降低杠铃时吸气。不要让杠铃接触地板。重复更多次。用你的另一条腿重复这些动作。',
			select:false
		},
		{
			img: 'Barbell-Squat',
			name: '杠铃深蹲',
			detail: '将杠铃放在立柱上，高度刚好高于锁骨的高度。 弯下腰，用脖子和肩膀的底部接触杠铃，将自己带到杠铃下方。',
			steps: '抓住左右两侧的杠铃，将其从立柱上抬起。后退一步，双脚分开与肩同宽站立。 这是你的起始位置。 通过向后推臀部和向前推胸部来吸气并降低身体。 继续，直到达到下蹲位置（大腿与地板成 45 度角）。 停顿 1 秒，呼气，将身体抬起至原位。 重复。',
			select:false
		},
		{
			img: 'Bulgarian-Barbell-Squat',
			name: '保加利亚杠铃深蹲',
			detail: '将杠铃放在肩膀后部，并在两侧牢牢抓住它。背对着长凳的一侧站立。将一只脚的脚背放在身后的长凳上，这样只有一只脚接触地板。',
			steps: '保持躯干直立，用支撑腿蹲下时吸气，直到后腿的膝盖几乎接触到地板。将自己推回到起始位置时呼气。重复所需的重复次数。用你的另一条腿重复这些动作。',
			select:false
		},
		{
			img: 'Bulgarian-Dumbbell-Squat',
			name: '保加利亚哑铃深蹲',
			detail: '抓住一对哑铃，将它们放在身体两侧。背对着长凳的一侧站立，在你和长凳之间留出几英尺的空间。向后抬起一条腿，将脚背放在长凳上。',
			steps: '保持躯干直立，用支撑腿蹲下时吸气，直到支撑腿的膝盖成 90 度角或后腿的膝盖几乎接触到地板。将自己推回到起始位置时呼气。重复更多次。用你的另一条腿重复这个练习。',
			select:false
		},
		{
			img: 'Dead-Lift',
			name: '硬拉',
			detail: '双脚站在杠铃下方，与臀部同宽。当你向下看时，杠铃应该在你脚的一半以上。弯下腰，用与肩同宽的握距抓住杠铃。稍微抬起臀部，挺直背部，身体向后倾斜，使躯干保持直立。',
			steps: '深吸一口气后，站立并将杠铃拉到腿前，用双腿带动。在动作的最高点，挤压臀大肌，向后拉肩膀，然后呼气。要将杠铃放回地面，请将臀部向后推，弯曲臀部，然后将杠铃降低到腿的前方，保持背部挺直。一旦杠铃通过你的膝盖，弯曲你的膝盖并将杠铃降低到地面。',
			select:false
		},
		{
			img: 'Hex-Barbell-Deadlift',
			name: '六角杠铃硬拉',
			detail: '双脚分开与肩同宽，站在有负荷的单杠内。蹲下并抓住杆的手柄。深吸一口气。',
			steps: '保持躯干直立，双臂和背部挺直，呼气，同时将单杠提升到站立位置。在动作的最高点，挤压臀大肌并向后拉肩膀。吸气，同时通过先向后推动臀部然后弯曲膝盖将单杠放回地面。重复规定的重复次数。',
			select:false
		},
		{
			img: 'High-Box-Squat',
			name: '高箱深蹲',
			detail: '站在箱子或长凳前，将杠铃放在肩前，双手交叉放在杠铃上以保持稳定。双脚分开，使其比肩宽稍宽（即比常规杠铃前蹲更宽）。将你的脚和膝盖指向同一方向对角线。',
			steps: '保持躯干直立，慢慢蹲下时吸气，首先将臀部向后推，然后将膝盖向外推。当你的屁股接触到盒子时停下来并保持一秒钟。 不要坐在箱子上向后摇晃。向上弹回时呼气，不要向前摇晃。重复规定的重复次数。',
			select:false
		},
		{
			img: 'Seated-Hip-Abduction',
			name: '坐姿髋内收',
			detail: '坐在内收器械上，将其调节至 45-60 度开口',
			steps: '你的大腿应该接触到垫子，你应该已经感觉到轻微的拉力。吸气并向内压，闭合双腿。当垫子接触时暂停 1 秒钟。呼气并回到起始位置。重复',
			select:false
		},
		{
			img: 'Seated-Hip-Adduction',
			name: '坐姿髋外展',
			detail: '坐在坐姿髋关节外展机上，双腿放在垫子内。拉动侧杆，让双腿并拢。松开侧杆以将腿锁定到位。向后躺下，抓住身体两侧的把手',
			steps: '呼气，同时用膝盖推动垫子，直到臀部完全外展。保持数到二。反向运动时吸气，双腿回到起始位置。重复规定的重复次数。',
			select:false
		},
		{
			img: 'Squat',
			name: '自重深蹲',
			detail: '双脚分开与肩同宽站立。你的膝盖和脚应该指向同一个方向。在你面前举起你的手臂以保持平衡（或者你可以将它们放在你身边并在下降时抬起它们）。',
			steps: '保持头部向上和躯干直立，在下蹲时吸气，同时弯曲臀部和膝盖，确保至少下降到大腿与地板平行。（如果你的手臂在身体两侧，在你下降时将它们举到你面前以帮助你保持平衡。）回到起始位置时呼气。重复规定的重复次数。',
			select:false
		},
		{
			img: 'Zech-Squat',
			name: '泽奇深蹲',
			detail: '将杠铃放在齐腰高的架子上并加载。保持你的肘部向身体两侧收拢，用你的肘部弯举起杠铃，将其拉入你的身体，然后将你的手腕交叉在杠铃上以将其固定到位。小心地从架子上向后退一步，并以宽站距站立，膝盖和脚指向同一方向的对角线。',
			steps: '保持背部挺直和身体直立，吸气，下蹲直到杠铃碰到大腿。当你站回起始位置时呼气，通过你的脚后跟发力。重复。',
			select:false
		}
	],
	absItem: [{
			img: 'Crunch',
			name: '卷腹',
			detail: '躺在地上，弯曲双腿并稍微打开与肩同宽。确保你的脚底完全接触地面。双手放在头侧或胸前。确保整个腰部接触地面。',
			steps: '将你的臀部轻轻压入地面并收紧你的腹肌，将你的肚脐拉向你的脊柱。保持肘部向两侧。你的下巴相对较高，目光注视着天​​花板。 不要向后仰头。深吸一口气，慢慢抬起上半身，直到肩胛骨离开地面。在努力过程中呼气，将骨盆压入地面，在最终位置保持一会儿。吸气时慢慢回到起始位置。',
			select:false
		},
		{
			img: 'Hanging-Leg-Raise',
			name: '悬挂抬腿',
			detail: '使用与肩同宽的旋前（正手）握把悬挂在杠铃上。伸直你的下背部，使你的下背部尽可能少的弓形。',
			steps: '保持身体不动，下背部挺直，双腿并拢，呼气，同时通过弯曲臀部慢慢抬起膝盖。保持数到二。吸气，同时伸展臀部，慢慢将膝盖放低至起始位置。重复规定的重复次数。',
			select:false
		},
		{
			img: 'Rope-Kneeling-Crunch',
			name: '跪姿绳索卷腹',
			detail: '跪在高滑轮前。每只手抓住绳索附件的一端，将手腕靠在头的两侧。通过弯曲你的臀部来降低你的躯干，但让绳子的重量抬起你的上半身，这样你的下背部就会伸展（向上弯曲）。',
			steps: '保持臀部固定，通过弯曲腹部向下拉绳索时呼气，使背部呈弓形。保持数到二。吸气，放松腹部，让绳子抬起上半身，使下背部恢复伸展状态。重复。',
			select:false
		},
		{
			img: 'Russian-Twist',
			name: '俄罗斯转体',
			detail: '使用与肩同宽的旋前（正手）握法站立握住杠铃。',
			steps: '将肘部放在身体两侧，呼气，同时向上卷曲杠铃，直到前臂几乎垂直。以可控的方式将杠铃放回起始位置时吸气。重复。',
			select:false
		},
		{
			img: 'Sit-Ups',
			name: '仰卧起坐',
			detail: '仰卧（仰卧），双腿弯曲，双脚平放在地上。将双手轻轻放在头后或两侧，保持肘部向外。',
			steps: '保持下背部平放在地板上，通过弯曲腹部将头部和肩膀抬离地面几英寸。这样做时呼气。保持收缩姿势数两下。将头和肩膀放低至起始位置时吸气。重复。',
			select:false
		},
	],
	bicepsItem: [{
			img: 'Barbell-Forehand-Curl',
			name: '正手杠铃弯举',
			detail: '使用与肩同宽的旋前（正手）握法站立握住杠铃。',
			steps: '将肘部放在身体两侧，呼气，同时向上卷曲杠铃，直到前臂几乎垂直。以可控的方式将杠铃放回起始位置时吸气。重复。',
			select:false
		},
		{
			img: 'Dumbbell-Concentration-Curl',
			name: '哑铃集中弯举',
			detail: '坐在长凳上，双脚分开，中间放一个哑铃。用一只手将哑铃抬离地面。将肘部放在大腿上。',
			steps: '保持手臂完全向下伸展，哑铃不要接触地板。这是起始位置。以平稳的拱形动作向前和向上弯曲杠铃，并在呼气时收缩二头肌。继续向上，直到哑铃与肩同高。挤压二头肌数 1 秒。将杠铃放回起始位置并吸气。不要向下摆动杠铃。重复多次，然后换手。',
			select:false
		},
		{
			img: 'Dumbbell-Curl',
			name: '哑铃弯举',
			detail: '使用中性握法（手掌朝内）站立，在身体两侧握住一对哑铃。把你的肩膀向后拉。',
			steps: '慢慢地将一个哑铃卷曲到肩膀上时呼气。随着哑铃的上升，逐渐将前臂旋后，使手掌在弯举的顶部朝向肩膀。一旦你的肘部完全弯曲，让你的肘部向前移动一点（肩部弯曲），直到你的前臂垂直。保持数到二并挤压二头肌。吸气，慢慢以一半的速度反向运动，并将哑铃放回起始位置。用相反的手臂重复相同的动作，然后交替重复。',
			select:false
		},
		{
			img: 'Dumbbell-Hammer-Preacher-Curl',
			name: '牧师凳锤式弯举',
			detail: '拿着一对哑铃，坐在牧师凳上。保持肘部弯曲，手掌相对（自然握法或锤式握法），将上臂后侧平放在扶手上。',
			steps: '放下哑铃时吸气，直到肘部几乎完全伸展。将哑铃向肩部卷曲时呼气。在动作的最高点保持数二，然后挤压二头肌。重复。',
			select:false
		},
		{
			img: 'Dumbbell-Overhand-Curl',
			name: '哑铃正手弯举',
			detail: '每只手各拿一个哑铃站立。将手腕旋前成与肩同宽的反握（正手）握法。',
			steps: '将肘部放在身体两侧，呼气，同时将哑铃向肩膀方向卷曲，直到前臂几乎垂直。保持数到二并挤压二头肌。将哑铃放回起始位置时吸气。重复。',
			select:false
		},
		{
			img: 'ez-Bar-Curl',
			name: 'ez杆弯举',
			detail: '使用与肩同宽的反握（手掌朝上）握住 EZ 弯举杆站立。你的肘部应该几乎完全伸展，杠铃应该靠在你的大腿上。',
			steps: '将上臂固定在身体两侧，呼气，同时将 EZ-curl 杠铃向上卷曲至肩部。在运动的最高点，保持数二并挤压二头肌。以可控的方式将 EZ-curl 杆降低到起始位置时吸气。重复。',
			select:false
		},
		{
			img: 'Rope-Curl',
			name: '绳索弯举',
			detail: '将一根杆连接到滑轮上。使用与肩同宽的旋后（反手）握法抓住杠铃。站在离滑轮大约一英尺远的地方，稍微向后倾斜。你的肘部应该在你的身体两侧，你的手臂应该几乎完全伸展，并且应该拉紧绳索。',
			steps: '保持身体不动，呼气，同时将杠铃向肩膀方向卷曲，直到肘部完全弯曲。一旦你的肘部完全弯曲，让它们向前移动一点（肩部弯曲），直到你的前臂垂直。保持数到二并挤压二头肌。将杠铃降低到起始位置时吸气，肘部放在身体两侧，手臂几乎完全伸展。重复。',
			select:false
		},

	],
	backItem: [{
			img: 'Backhand-Barbell-Row',
			name: '反手杠铃划船',
			detail: '使用与肩同宽的反握（反手）握住杠铃，双脚分开与臀部同宽站立。弯曲你的臀部和膝盖，以 45 度角向前倾斜。你的手臂应该几乎完全伸展，杠铃应该放在你的大腿上。',
			steps: '保持头部向上，背部挺直，将杠铃拉至腰部时呼气。保持数到二并挤压背部肌肉。以可控的方式将杠铃降低到起始位置时吸气。重复。',
			select:false
		},
		{
			img: 'Barbell-Row',
			name: '杠铃划船',
			detail: '正手握住杠铃，双手分开略宽于肩宽弯曲膝盖，将杠铃放在大腿上，身体前倾。',
			steps: '腰部呈自然曲线，挺胸。背部呈 30 度角，手臂完全伸展。这是起始位置。吸气并将杠铃拉向自己，用大腿挤压直到它轻轻接触腹部。呼气并将杠铃降低到起始位置。重复。',
			select:false
		},
		{
			img: 'Dumbbell-Row',
			name: '哑铃划船',
			detail: '左手持哑铃，右膝跪在长凳上，右臂支撑身体。哑铃应该垂直向下，左臂几乎完全伸展。',
			steps: '将哑铃拉到腰部一侧时呼气。保持数到二。将哑铃放低至起始位置时吸气。重复所需的重复次数。用你的右臂重复。',
			select:false
		},
		{
			img: 'High-Pull-Down-Rope',
			name: '高位绳索下拉',
			detail: '坐在滑轮前的长凳上。',
			steps: '连接一个闭合的 V 形握把，双臂完全伸过头顶抓住它。这是起始位置吸气并将把手拉向你，同时稍微向后倾斜。暂停 1 秒钟，然后回到起始位置。重复',
			select:false
		},
		{
			img: 'Lever-Bent-Over-Row',
			name: 'T杆划船',
			detail: '站立，两腿之间夹着一颗上膛的地雷。弯曲臀部并稍微弯曲膝盖，用双手抓住板正下方的地雷杆。您可以将手指相互交叉，也可以将一只手放在另一只手上。除了抓住地雷杆，您还可以在其周围钩一个双排杆。你的背部应该是直的并且接近水平。',
			steps: '保持肘部靠近身体，将地雷拉到胸前时呼气。保持数到二并挤压背部肌肉。以可控的方式放下地雷时吸气，直到肩膀向下伸展。不要让地雷接触地板。重复。',
			select:false
		},
		{
			img: 'Prone-Incline-Wide-Grip-Upright-Row',
			name: '上斜仰卧宽距划船',
			detail: '握住负重的杠铃，握法与肩同宽，旋前（正手）握法，俯卧（正面）在倾斜 45 度或更多度的长凳上，让杠铃笔直垂下。',
			steps: '将杠铃拉到下胸部时呼气。保持数到二。将杠铃降低到起始位置时吸气。重复规定的重复次数。',
			select:false
		},
		{
			img: 'Pull-Up',
			name: '引体向上',
			detail: '用比肩宽更宽的旋前（正手）握把抓住杠铃。悬垂时双臂和肩膀完全伸展。',
			steps: '向上拉身体时呼气，直到下巴高于杠铃。保持数到二并挤压背部肌肉。降低身体时吸气，直到手臂和肩膀完全伸展。重复。',
			select:false
		},
		{
			img: 'Wide-Pull-Downs',
			name: '高位下拉',
			detail: '坐在滑轮前的长凳上。',
			steps: '连接一个闭合的 V 形握把，双臂完全伸过头顶抓住它。这是起始位置吸气并将把手拉向你，同时稍微向后倾斜。暂停 1 秒钟，然后回到起始位置。重复',
			select:false
		}
	],
	tricepsItem: [{
			img: 'Barbell-Skull-Crusher',
			name: '碎颅者',
			detail: '仰卧（仰卧）在平坦的长凳上。使用旋前（正手）、与肩同宽的握法卸下杠铃，将杠铃举过前额，使手臂略微向后倾斜。',
			steps: '保持上臂不动，吸气，同时弯曲肘部，以平滑的半圆形运动将杠铃朝前额放低。反向运动时呼气，并通过伸展肘部将杠铃推回起始位置。重复规定的重复次数。',
			select:false
		},
		{
			img: 'Bent-Knee-Bench-Dip',
			name: '仰卧撑',
			detail: '坐在长凳的一侧，将双手放在长凳的边缘，靠近臀部。稍微向前移动你的脚，让你的臀部离开长凳，这样你的体重由你的手臂支撑，你的膝盖弯曲成 90 度角。',
			steps: '保持躯干直立，肘部靠近身体，吸气，同时弯曲肘部降低身体。通过伸展肘部抬起身体时呼气。重复。',
			select:false
		},
		{
			img: 'Close-Grip-Push-Up',
			name: '窄距俯卧撑',
			detail: '四肢着地，双手放在肩膀正下方或靠得更近。向后伸展双脚并伸直身体。',
			steps: '保持身体挺直，肘部内收，吸气，同时将胸部放低到双手上。将身体推回起始位置时呼气。重复。',
			select:false
		},
		{
			img: 'Reverse-Grip-Triceps-Pushdown',
			name: '反手三头绳索臂屈伸',
			detail: '首先在高位滑轮机上设置杆附件（直杆或 ez）。面向杠铃附件，手掌朝上（反握）抓住它，与肩同宽。',
			steps: '使用你的背阔肌降低杠铃，直到你的手臂完全伸展到身体两侧。肘部应在身体两侧，双脚应与肩同宽。这是起始位置。吸气时慢慢抬起杠铃附件，使其与胸部对齐。只有前臂应该移动，肘部/上臂应该始终固定在你身边。然后开始将电缆杆降低到原来的凝视位置，同时用力呼气并收缩三头肌。重复推荐的重复次数。',
			select:false
		},
		{
			img: 'Seated-Bent-Over-Two-Arm-Dumbbell-Kickback',
			name: '坐姿俯身哑铃双手臂屈伸',
			detail: '使用中性握法或锤式握法（手掌朝向身体）握住一对哑铃，坐在长凳上。保持你的上臂固定在你的身体两侧，向前倾直到你的躯干几乎水平。你的背部应该挺直。将你的上臂抬高一点，直到它们水平。你的肘部应该弯曲90度。',
			steps: '保持上臂水平，在将哑铃向身后伸展时呼气，直到前臂水平。保持数到二。慢慢将哑铃放低至起始位置时吸气。重复。',
			select:false
		},
		{
			img: 'Seated-Dumbbell-Overhead-Triceps-Extension',
			name: '坐姿哑铃过头臂屈伸',
			detail: '拿着哑铃，坐在平坦的长凳或椅子上，将哑铃放在单膝上。用双手抓住哑铃杆的底部，一只手放在另一只手上。用膝盖踢起哑铃，将哑铃的另一端放在肩膀上。将哑铃举过肩部并握在背后，上臂垂直，肘部弯曲。',
			steps: '保持肘部靠近头部，上臂垂直，通过伸展肘部举起哑铃时呼气。重复。',
			select:false
		},
		{
			img: 'Standing-Barbell-Dips',
			name: '站姿杠铃臂屈伸',
			detail: '双脚分开与肩同宽站立，正手握住杠铃。双手的距离应小于肩宽。',
			steps: '将杠铃举过头顶，双臂完全伸展。这是起始位置。吸气并降低头后的杠铃，直到前臂接触二头肌。暂停 1 秒，回到起始位置。重复',
			select:false
		},
		{
			img: 'Triceps-Dip',
			name: '窄距双杆臂屈伸',
			detail: '安装与肩同宽的倾角杆并伸直手臂，使双腿悬空。',
			steps: '保持肘部内收，身体直立，慢慢降低身体，直到肘部形成 90 度角或感觉到肩膀轻微拉伸。不要忘记吸气。将身体推回起始位置时呼气。重复推荐的重复次数。',
			select:false
		},
		{
			img: 'Triceps-Rope-Push-Down',
			name: '绳索臂屈伸',
			detail: '站在滑轮下方，用中立握法抓住绳索附件的两端（手掌彼此相对）。将肘部向两侧拉，臀部稍微前倾，保持背部挺直。',
			steps: '伸展肘部并向下推绳索时呼气。当你的手臂伸展时，扭动你的手腕，使你的手掌在运动结束时朝下。反向运动时吸气，将绳索放回起始位置。重复。',
			select:false
		}
	]

}
module.exports = {
	data: movement,
	selected: select_movement
}
