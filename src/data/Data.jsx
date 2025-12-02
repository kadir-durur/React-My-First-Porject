// GÖĞÜS
import IncDumbell from './image/inclineDumbell.jpg';
import BenchPress from './image/benchPress.jpg';
import ChestFly from './image/chestFly.jpg';
import PushUp from './image/pushUp.jpg';
import DumbellPullover from './image/dumbellPullover.jpg';
// SIRT
import LatPulldown from './image/latPulldown.jpg';
import CableRow from './image/seatedCableRow.jpg';
import BarbellRow from './image/barbellRow.jpg';
import DumbellRow from './image/dumbellRow.jpg';
import Hyper from './image/hyper.jpg';
// BİCEPS
import BarbellCurl from './image/barbellCurl.jpg';
import DumbellCurl from './image/dumbellCurl.jpg';
import HammerCurl from './image/hammerCurl.jpg';
import PreacherCurl from './image/preacherCurl.jpg';
import CableCurl from './image/cableCurl.jpg';
// TRİCEPS
import Triceps from './image/triceps.jpg';
import SkullCrusher from './image/skullCrusher.jpg';
import Overhead from './image/overhead.jpg';
import Dips from './image/dips.jpg';
import CloseBench from './image/closeBench.jpg';
// OMUZ
import Shoulder from './image/shoulder.jpg';
import Lateral from './image/lateral.jpg';
import Front from './image/front.jpg';
import Delt from './image/delt.jpg';
import Arnold from './image/arnold.jpg';
// KARIN    
import CableCrunch from './image/crunch.jpg';
import Hanging from './image/hanging.jpg';
import Decline from './image/decline.jpg';
import Russian from './image/russian.jpg';
import Roll from './image/roll.jpg';


const muscles = [
    {
        name: "chest",
        displayName: "Göğüs",
        exercises: [{
            id: 1,
            excName: "Incline Dumbell Press",
            equipment: "Dumbell",
            difficulty: "Intermadiate",
            instructions: "Incline dumbbell press, eğimli bir sehpada sırt üstü yatarak yapılır; dambıllar göğüs hizasında tutulur ve kontrollü şekilde yukarı doğru itilir. Hareket sırasında dirsekler hafif dışa açık olmalı ve dambıllar tepe noktada birbirine yaklaşmalıdır. Bu egzersiz üst göğüs kaslarını hedef alır.",
            // image: IncDumbell
        },
        {
            id: 2,
            excName: "Bench Press",
            equipment: "Barbell",
            difficulty: "Intermadiate",
            instructions: "Bench press, düz bir sehpada sırt üstü yatarak yapılan temel bir göğüs egzersizidir. Bar ya da dambıllar göğüs hizasında tutulur, kontrollü şekilde yukarı itilir ve tekrar aşağı indirilir. Ana hedef göğüs kaslarıdır, ancak triceps ve ön omuzlar da çalışır.",
            // image: BenchPress
        },
        {
            id: 3,
            excName: "Chest Fly",
            equipment: "Dumbell,Cable Machine",
            difficulty: "Intermadiate",
            instructions: "Chest fly, düz bir sehpada sırt üstü yatarak yapılan ve göğüs kaslarını izole eden bir egzersizdir. Dambıllar avuç içleri birbirine bakacak şekilde göğüs hizasında tutulur, kollar yana doğru açılır ve kontrollü şekilde tekrar birleştirilir. Hareket boyunca dirsekler hafif bükülü kalmalı, kas kontrolü ön planda olmalıdır.",
            // image: ChestFly
        },
        {
            id: 4,
            excName: "Push Up",
            equipment: "BodyWeight",
            difficulty: "Beginner",
            instructions: "Push-up, vücut ağırlığıyla yapılan temel bir göğüs ve üst vücut egzersizidir. Eller omuz genişliğinde yere konur, vücut düz bir çizgide tutulur ve dirsekler bükülerek göğüs yere yaklaştırılır, ardından tekrar yukarı itilir. Göğüs, triceps ve core kaslarını etkili şekilde çalıştırır.",
            // image: PushUp
        },
        {
            id: 5,
            excName: "Dumbell Pullover",
            equipment: "Dumbell",
            difficulty: "Advanced",
            instructions: "Dumbbell pullover, düz sehpada sırt üstü yatarak yapılan bir egzersizdir; tek bir dambıl iki elle tutulur ve baş hizasına doğru kontrollü şekilde geriye indirilip tekrar yukarı kaldırılır. Göğüs ve lat (kanat) kaslarını aynı anda çalıştırır, nefes kontrolü ve omuz stabilitesi önemlidir.",
            // image: DumbellPullover
        }
        ]
    },
    {
        name: "back",
        displayName: "Sırt",
        exercises: [{
            id: 6,
            excName: "Lat Pulldown",
            equipment: "Machine",
            difficulty: "Intermadiate",
            instructions: "Lat pulldown, geniş sırt kaslarını (latissimus dorsi) hedef alan bir makine egzersizidir. Oturarak yapılır; bar, avuç içleri öne bakacak şekilde geniş tutuşla kavranır ve çene hizasına kadar kontrollü şekilde göğse doğru çekilir, ardından yavaşça yukarı bırakılır. Hareket boyunca sırt düz tutulmalı ve omuzlar aşağıda kalmalıdır.",
            // image: LatPulldown
        },
        {
            id: 7,
            excName: "Seated Cable Row",
            equipment: "Machine",
            difficulty: "Intermadiate",
            instructions: "Seated cable row, sırt kaslarını hedef alan bir çekme egzersizidir. Düz oturularak yapılır; tutamaç iki elle kavranır, sırt dik tutulur ve dirsekler geriye doğru çekilerek tutamaç karna yaklaştırılır, ardından kontrollü şekilde ileri bırakılır. Hareket boyunca omuzlar sabit kalmalı ve bel çukurlaştırılmamalıdır.",
            // image: CableRow
        },
        {
            id: 8,
            excName: "Barbell Row",
            equipment: "Barbell",
            difficulty: "Advanced",
            instructions: "Barbell row, sırt kaslarını hedef alan temel bir çekme egzersizidir. Dizler hafif bükülü, bel düz ve gövde öne eğik pozisyonda barbell kavranır; dirsekler geriye doğru çekilerek bar karna yaklaştırılır, ardından kontrollü şekilde aşağı indirilir. Hareket boyunca bel sabit tutulmalı ve momentumdan kaçınılmalıdır.",
            // image: BarbellRow
        },
        {
            id: 9,
            excName: "Dumbell Row",
            equipment: "Dumbell",
            difficulty: "Intermadiate",
            instructions: "Dumbbell row, sırt kaslarını hedef alan tek taraflı bir çekme egzersizidir. Bir diz ve el sehpaya yerleştirilir, diğer eldeki dambıl yere doğru sarkıtılır ve dirsek geriye doğru çekilerek dambıl karna yaklaştırılır, ardından kontrollü şekilde indirilir. Hareket boyunca sırt düz tutulmalı ve bel sabit kalmalıdır.",
            // image: DumbellRow
        },
        {
            id: 10,
            excName: "Hyper Extansion",
            equipment: "BodyWeight , Bench",
            difficulty: "Beginner",
            instructions: "Hyperextension, bel ve sırt kaslarını güçlendiren bir egzersizdir. Genellikle özel bir sehpa üzerinde yapılır; gövde öne doğru eğilir ve ardından bel kaslarıyla yukarı kaldırılır. Hareket boyunca sırt düz tutulmalı ve kontrollü şekilde yapılmalıdır.",
            // image: Hyper
        }
        ]
    },
    {
        name: "biceps",
        displayName: "Biceps",
        exercises: [
            {
                id: 11,
                excName: "Barbell Curl",
                equipment: "Barbell",
                difficulty: "Beginner",
                instructions: "Barbell curl, ön kol (biceps) kaslarını hedef alan temel bir egzersizdir. Ayakta dik durularak barbell avuç içleri öne bakacak şekilde tutulur, dirsekler sabit kalacak şekilde bar yukarı doğru bükülerek kaldırılır ve kontrollü şekilde indirilir. Hareket boyunca vücut sabit tutulmalı, salınımdan kaçınılmalıdır.",
                // image: BarbellCurl
            },
            {
                id: 12,
                excName: "Dumbell Curl",
                equipment: "Dumbell",
                difficulty: "Beginner",
                instructions: "Dumbbell curl, biceps kaslarını çalıştıran temel bir egzersizdir. Ayakta dik durularak dambıllar avuç içleri öne bakacak şekilde tutulur, dirsekler sabit kalacak şekilde dambıllar yukarı doğru bükülerek kaldırılır ve kontrollü şekilde indirilir. Hareket boyunca vücut sabit tutulmalı, salınımdan kaçınılmalıdır.",
                // image: DumbellCurl
            },
            {
                id: 13,
                excName: "Hammer Curl",
                equipment: "Dumbell",
                difficulty: "Beginner",
                instructions: "Hammer curl, ön kol (biceps) ve brachialis kaslarını hedef alan bir egzersizdir. Dambıllar avuç içleri vücuda bakacak şekilde tutulur, dirsekler sabit kalacak şekilde dambıllar yukarı doğru kaldırılır ve kontrollü şekilde indirilir. Hareket boyunca vücut dik ve sabit tutulmalıdır.",
                // image: HammerCurl
            },
            {
                id: 15,
                excName: "Preacher Curl",
                equipment: "Barbell",
                difficulty: "Intermadiate",
                instructions: "Preacher curl, biceps kaslarını izole eden bir egzersizdir. Özel eğimli bir sehpa üzerinde oturularak yapılır; kollar sehpa üzerinde sabitlenir ve dambıl ya da barbell dirsekten bükülerek yukarı kaldırılır, ardından kontrollü şekilde indirilir. Hareket boyunca omuzlar sabit kalmalı ve momentumdan kaçınılmalıdır.",
                // image: PreacherCurl
            },
            {
                id: 16,
                excName: "Cable Curl",
                equipment: "Cable Machine",
                difficulty: "Advanced",
                instructions: "Cable curl, biceps kaslarını sürekli gerilim altında çalıştıran bir egzersizdir. Düz bar ya da tutamaç, alçak makineye bağlanır; avuç içleri öne bakacak şekilde tutulur ve dirsekler sabit kalacak şekilde bar yukarı doğru çekilir, ardından kontrollü şekilde indirilir. Hareket boyunca vücut dik ve sabit tutulmalıdır.",
                // image: CableCurl
            },

        ]
    },
    {
        name: "triceps",
        displayName: "Triceps",
        exercises: [
            {
                id: 17,
                excName: "Triceps Pushdown",
                equipment: "Machine",
                difficulty: "Intermadiate",
                instructions: "Triceps pushdown, triceps kaslarını hedef alan bir makine egzersizidir. Düz veya V-bar tutamaç, yüksek makineye bağlanır; avuç içleri aşağı bakacak şekilde tutulur ve dirsekler sabit kalacak şekilde bar aşağı doğru itilir, ardından kontrollü şekilde yukarı bırakılır. Hareket boyunca dirsekler vücuda yakın tutulmalı ve omuzlar sabit kalmalıdır.",
                // image: Triceps
            },
            {
                id: 18,
                excName: "Skull Crusher",
                equipment: "Barbell",
                difficulty: "Advanced",
                instructions: "Skull crusher, triceps kaslarını hedef alan etkili bir egzersizdir. Düz sehpada sırt üstü yatarak yapılır; barbell ya da dambıllar alın hizasına doğru kontrollü şekilde indirilir ve dirsekler sabit tutularak tekrar yukarı kaldırılır. Hareket boyunca dirsekler sabit kalmalı ve başa yaklaşan ağırlık dikkatle kontrol edilmelidir.",
                // image: SkullCrusher
            },
            {
                id: 19,
                excName: "Dumbell Overhead Extansion",
                equipment: "Dumbell",
                difficulty: "Intermadiate",
                instructions: "Dumbbell overhead extension, triceps kaslarını hedef alan etkili bir egzersizdir. Ayakta ya da oturarak yapılabilir; dambıl iki elle baş üstünde tutulur, dirsekler sabit kalacak şekilde dambıl başın arkasına doğru indirilir ve tekrar yukarı kaldırılır. Hareket boyunca dirseklerin içe dönük ve sabit kalmasına dikkat edilmelidir.",
                // image: Overhead
            },
            {
                id: 20,
                excName: "Dips",
                equipment: "Bodyweight",
                difficulty: "Intermadiate",
                instructions: "Dips, triceps, göğüs ve omuz kaslarını çalıştıran etkili bir vücut ağırlığı egzersizidir. Paralel barlarda vücut yukarıda tutulur, dirsekler bükülerek gövde kontrollü şekilde aşağı indirilir ve tekrar yukarı itilir. Hareket boyunca gövde dik tutulursa triceps, hafif öne eğilirse göğüs kasları daha fazla aktive olur.",
                // image: Dips
            },
            {
                id: 21,
                excName: "Close Grip Bench Press",
                equipment: "Barbell",
                difficulty: "Advanced",
                instructions: "Close grip bench press, triceps ve iç göğüs kaslarını hedef alan bir barbell egzersizidir. Düz sehpada sırt üstü yatarak, eller omuz genişliğinden daha dar şekilde barı kavranır; bar göğse indirilir ve dirsekler vücuda yakın tutularak yukarı itilir. Hareket boyunca bel sabit, bilekler dik ve kontrol ön planda olmalıdır.",
                // image: CloseBench
            }
        ]
    },
    {
        name: "omuz",
        displayName: "Omuz",
        exercises: [
            {
                id: 22,
                excName: "Shoulder Press",
                equipment: "Dumbell",
                difficulty: "Intermadiate",
                instructions: "Shoulder press, omuz kaslarını (özellikle deltoidleri) hedef alan temel bir itme egzersizidir. Ayakta ya da oturarak yapılabilir; dambıl veya barbell baş hizasında tutulur, dirsekler dışa dönüktür. Ağırlık baş üstüne doğru itilir ve kontrollü şekilde başlangıç pozisyonuna indirilir. Hareket boyunca sırt düz tutulmalı ve bel boşluğu abartılmamalıdır.",
                // image: Shoulder
            },
            {
                id: 23,
                excName: "Lateral Raise",
                equipment: "Dumbell",
                difficulty: "Intermadiate",
                instructions: "Lateral raise, omuzların yan kısmını (özellikle lateral deltoid) hedef alan bir izolasyon egzersizidir. Ayakta dik durularak dambıllar avuç içleri vücuda bakacak şekilde tutulur; dirsekler hafif bükülü kalacak şekilde kollar yanlara doğru kaldırılır ve omuz hizasında durdurulup kontrollü şekilde indirilir. Hareket boyunca vücut sabit tutulmalı, dambıllar savrulmamalı ve trapez kasları devreye girmemelidir.",
                // image: Lateral
            },
            {
                id: 24,
                excName: "Dumbell Front Raise",
                equipment: "Dumbell",
                difficulty: "Intermadiate",
                instructions: "Dumbbell front raise, omuzların ön kısmını (anterior deltoid) hedef alan bir izolasyon egzersizidir. Ayakta dik durularak dambıllar avuç içleri vücuda bakacak şekilde tutulur; kollar düz şekilde öne doğru kaldırılır ve omuz hizasında durdurulup kontrollü şekilde indirilir. Hareket boyunca sırt düz tutulmalı, dambıllar savrulmamalı ve bel boşluğu abartılmamalıdır.",
                // image: Front
            },
            {
                id: 25,
                excName: "Rear Delt Fly",
                equipment: "Dumbell",
                difficulty: "Intermadiate",
                instructions: "Rear delt fly, arka omuz (posterior deltoid) kaslarını hedef alan bir izolasyon egzersizidir. Genellikle dambıllarla ayakta hafif öne eğilerek veya incline bench üzerinde yapılır. Dambıllar avuç içleri birbirine bakacak şekilde tutulur; dirsekler hafif bükülü kalacak şekilde kollar yana ve arkaya doğru açılır, ardından kontrollü şekilde indirilir. Hareket boyunca sırt düz tutulmalı, boyun kasılmamalı ve momentumdan kaçınılmalıdır.",
                // image: Delt
            },
            {
                id: 26,
                excName: "Arnold Press",
                equipment: "Dumbell",
                difficulty: "Intermadiate",
                instructions: "Arnold press, omuz kaslarını (ön, yan ve arka deltoid) aynı anda çalıştıran bir dambıl egzersizidir. Hareket, dambılları çene hizasından baş üstüne iterken avuç içlerini içten dışa çevirerek yapılır. Bu dönüş hareketi omuzlara daha geniş bir hareket aralığı kazandırır.",
                // image: Arnold
            }
        ]
    },
    {
        name : "karın",
        displayName:"Karın",
        exercises : [
            {
                id : 27,
                excName : "Cable Crunch",
                equipment : "Cable Machine",
                difficulty : "Intermadiate",
                instructions : "Cable crunch, karın kaslarını hedef alan bir makine egzersizidir. Diz çökerek, yüksek makineye bağlı ip tutamaçla yapılır; ip baş hizasında tutulur, karın kaslarıyla öne doğru bükülerek gövde aşağı çekilir ve kontrollü şekilde başlangıç pozisyonuna dönülür. Hareket boyunca bel sabit tutulmalı ve boyunla değil karınla çekiş yapılmalıdır.",
                // image : CableCrunch
            },
            {
                id : 28,
                excName : "Hanging Leg Raise",
                equipment : "BodyWeight",
                difficulty: "Intermadiate",
                instructions : "Hanging leg raise, karın kaslarını (özellikle alt abdominal bölgeyi) hedef alan etkili bir vücut ağırlığı egzersizidir. Barfiks barına asılarak yapılır; bacaklar düz veya hafif bükülü şekilde öne ve yukarı kaldırılır, ardından kontrollü şekilde indirilir. Hareket boyunca bel boşluğu abartılmamalı ve salınımdan kaçınılmalıdır.",
                // image : Hanging
            },
            {
                id : 29,
                excName : "Decline Sit-Up",
                equipment : "BodyWeight",
                difficulty: "Beginner",
                instructions : "Decline sit-up, karın kaslarını (özellikle üst abdominal bölgeyi) hedef alan yoğun bir egzersizdir. Eğimli bir sehpada sırt üstü yatarak yapılır; eller başta ya da göğüste çapraz tutulur, gövde yukarı doğru kaldırılır ve kontrollü şekilde geri indirilir. Hareket boyunca bel boşluğu korunmalı ve boyunla değil karınla çekiş yapılmalıdır.",
                // image : Decline
            },
            {
                id : 30,
                excName : "Russian Twist",
                equipment : "BodyWeight",
                difficulty : "Intermadiate",
                instructions:"Russian twist, oblik (yan karın) kaslarını hedef alan bir core egzersizidir. Dizler bükülü şekilde yere oturulur, gövde hafif geriye yaslanır ve ellerle (isteğe bağlı ağırlıkla) sağa-sola doğru dönüşler yapılır. Hareket boyunca karın kasları sıkı tutulmalı ve bel sabit kalmalıdır.",
                // image : Russian
            },
            {
                id : 31,
                excName :"Ab Wheel Rollout",
                equipment : "Roll",
                difficulty : "Intermadiate",
                instructions: "Ab wheel rollout, karın kaslarını (özellikle rectus abdominis ve core stabilizatörlerini) hedef alan zorlu bir egzersizdir. Dizlerin üzerinde başlanır, ab wheel öne doğru yuvarlanarak vücut düz bir çizgiye getirilir, ardından karın kaslarıyla çekilerek başlangıç pozisyonuna dönülür. Hareket boyunca bel çukurunu korumak ve kalçayı düşürmemek çok önemlidir.",
                // image : Roll
            }
        ]
    }
]

export default muscles