import React from 'react';
import { FaChartLine, FaWifi, FaStore, FaDesktop, FaComment, FaBuilding } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaChartLine size={30} className="text-blue-500" />,
      title: 'Nescient Mete',
      description: 'Provident nihil minus qui consequatur non omnis maiores.',
    },
    {
      icon: <FaWifi size={30} className="text-blue-500" />,
      title: 'Eosle Commodi',
      description: 'Ut autem aut autem non a. Sint sint sit facilis nam iusto sint.',
    },
    {
      icon: <FaStore size={30} className="text-blue-500" />,
      title: 'Ledo Markt',
      description: 'Ut exercitationem voluptatem nisi sed. Quidem fuga consequatur.',
    },
    {
      icon: <FaDesktop size={30} className="text-blue-500" />,
      title: 'Asperiores Commodit',
      description: 'Non est temporibus minus omnis sed dolor esse consequatur.',
    },
    {
      icon: <FaBuilding size={30} className="text-blue-500" />,
      title: 'Velit Doloremque',
      description: 'Cumque ut suscipit saepe. Eos at ipsum corporis aut.',
    },
    {
      icon: <FaComment size={30} className="text-blue-500" />,
      title: 'Dolori Architecto',
      description: 'Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-16">
      {/* Services Section */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold">Services</h2>
          <p className="text-gray-600 mt-2">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg transition duration-300"
            >
              <div className="mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Statistics Section */}
      <div className="bg-blue-500 text-white py-16 mt-16">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-5xl font-bold">232</h3>
            <p className="text-lg mt-2">Clients</p>
          </div>
          <div>
            <h3 className="text-5xl font-bold">521</h3>
            <p className="text-lg mt-2">Projects</p>
          </div>
          <div>
            <h3 className="text-5xl font-bold">1453</h3>
            <p className="text-lg mt-2">Hours Of Support</p>
          </div>
          <div>
            <h3 className="text-5xl font-bold">32</h3>
            <p className="text-lg mt-2">Awards</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
