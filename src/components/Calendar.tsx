import { Leaf, Snowflake, LucideProps, Package } from 'lucide-react';
import { ElementType } from 'react';
import pomegranateIcon from '@/assets/aa-removebg-preview (1).png';
import strawberryIcon from '@/assets/strawberry-4-128.ico';
import garlicIcon from '@/assets/Garlic (2).png';
import onionIcon from '@/assets/11.png';
import artichokeIcon from '@/assets/22.png';
import mangoIcon from '@/assets/33.png';
import potatoIcon from '@/assets/44.png';
import grapesIcon from '@/assets/01.png';
import orangeIcon from '@/assets/02.png';
import mandarinIcon from '@/assets/03.png';
import sweetPotatoIcon from '@/assets/04.png';

const productAvailability = [
  { name: "Strawberry (Fresh)", months: [1, 2, 3, 4], type: 'fresh' }, // Feb - May
  { name: "Grapes (Red & White)", months: [5, 6, 7, 8, 9], type: 'fresh' }, // Jun - Oct
  { name: "Orange", months: [0, 1, 10, 11], type: 'fresh' }, // Nov - Mar
  { name: "Mandarin", months: [0, 1, 10, 11], type: 'fresh' }, // Nov - Mar
  { name: "Pomegranates", months: [8, 9, 10], type: 'fresh' }, // Sep - Nov
  { name: "Mango", months: [5, 6, 7], type: 'fresh' }, // Jun - Aug
  { name: "Sweet Potatoes", months: [8, 9, 10, 11], type: 'fresh' }, // Sep - Dec
  { name: "Artichokes", months: [2, 3, 4], type: 'fresh' }, // Mar - May
  { name: "Onions", months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], type: 'fresh' },
  { name: "Garlic", months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], type: 'fresh' },
  { name: "Potatoes", months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], type: 'fresh' },
  { name: "All Frozen Products", months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], type: 'frozen' },
  { name: "All Pickled Products", months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], type: 'pickled' },
];

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const productIcons: { [key: string]: ElementType<LucideProps> | string } = {
    grape: grapesIcon,
    orange: orangeIcon,
    mandarin: mandarinIcon,
    strawberry: strawberryIcon,
    pomegranate: pomegranateIcon,
    mango: mangoIcon,
    'sweet potato': sweetPotatoIcon,
    artichoke: artichokeIcon,
    onion: onionIcon,
    garlic: garlicIcon,
    potato: potatoIcon,
    frozen: Snowflake,
    pickled: Package,
};

const getProductIcon = (productName: string): ElementType<LucideProps> | string => {
    const lowerName = productName.toLowerCase();
    for (const key in productIcons) {
        if (lowerName.includes(key)) return productIcons[key];
    }
    return Leaf; // Default fallback for other vegetables
};

const Calendar = () => {
  return (
    <section id="calendar" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Product Availability Calendar</h2>
          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            Discover the peak seasons for our fresh produce. Our high-quality frozen products are available year-round for your convenience.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <div className="min-w-[1000px]">
              {/* Header Row */}
              <div className="grid grid-cols-[minmax(180px,1.5fr)_repeat(12,1fr)] bg-green-600 text-white font-bold text-sm uppercase tracking-wider">
                <div className="p-4 text-left">Product</div>
                {months.map(month => (
                  <div key={month} className="p-4 text-center border-l border-green-700/50">{month}</div>
                ))}
              </div>

              {/* Product Rows */}
              <div>
                {productAvailability.map((product, idx) => (
                  <div key={product.name} className={`grid grid-cols-[minmax(180px,1.5fr)_repeat(12,1fr)] items-stretch border-t border-gray-200 ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-100/50'}`}>
                    <div className="p-4 text-left font-medium text-gray-800 text-sm">
                      {product.name}
                    </div>
                    {months.map((_, monthIdx) => (
                      <div key={monthIdx} className="flex items-center justify-center border-l border-gray-200">
                        {product.months.includes(monthIdx) && (
                          <div className={`w-full h-full flex items-center justify-center ${
                            product.type === 'fresh' ? 'bg-green-50' :
                            product.type === 'frozen' ? 'bg-blue-50' :
                            'bg-yellow-50'
                          }`}>
                            {(() => { 
                                const IconOrSrc = getProductIcon(product.name);
                                if (typeof IconOrSrc === 'string') {
                                    return <img src={IconOrSrc} alt={product.name} className="w-8 h-8 object-contain" />;
                                }
                                return <IconOrSrc className={`w-6 h-6 ${
                                  product.type === 'fresh' ? 'text-green-600' :
                                  product.type === 'frozen' ? 'text-blue-600' :
                                  'text-yellow-600'
                                }`}/>;
                            })()} 
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-gray-600">
            <div className="flex items-center gap-2" title="Includes fruits and vegetables">
                <Leaf className="w-6 h-6 text-green-600" />
                <span>Fresh Product Season</span>
            </div>
            <div className="flex items-center gap-2">
                <Snowflake className="w-6 h-6 text-blue-600" />
                <span>Frozen Products (Year-Round)</span>
            </div>
            <div className="flex items-center gap-2">
                <Package className="w-6 h-6 text-yellow-600" />
                <span>Pickled Products (Year-Round)</span>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Calendar;