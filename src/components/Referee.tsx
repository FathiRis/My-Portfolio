import React from 'react';
import { Award, User } from 'lucide-react';

const Referee = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center space-x-4 bg-white px-8 py-6 rounded-2xl shadow-lg border border-gray-100">
            <div className="bg-[#0077B6] text-white w-12 h-12 rounded-full flex items-center justify-center">
              <Award className="w-6 h-6" />
            </div>
            <div className="text-left">
              <h3 className="text-lg font-bold text-[#03045E] font-montserrat mb-1">
                Reference Available
              </h3>
              <p className="text-gray-700 font-opensans">
                <span className="font-semibold">Mr. P.P. Wijerathne</span><br />
                <span className="text-sm text-gray-600">ICT Teacher, Zahira College</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Referee;