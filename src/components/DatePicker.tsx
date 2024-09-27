"use client";

import React from 'react';
import { useDatePickerStore } from '../stores/useDatePickerStore';

const DatePicker = () => {
  const {
    recurrenceType,
    interval,
    daysOfWeek,
    setRecurrenceType,
    setInterval,
    setDaysOfWeek,
  } = useDatePickerStore();

  const handleDaysOfWeekToggle = (day: string) => {
    if (daysOfWeek.includes(day)) {
      setDaysOfWeek(daysOfWeek.filter((d) => d !== day));
    } else {
      setDaysOfWeek([...daysOfWeek, day]);
    }
  };

  return (
    <div className="bg-gradient-to-br from-indigo-500 to-purple-500 p-8 rounded-xl shadow-2xl max-w-lg mx-auto mt-12">
      {/* Header */}
      <h2 className="text-4xl font-bold text-white mb-8 text-center tracking-wider">
        Recurrence Settings
      </h2>

      {/* Recurrence Type Selector */}
      <div className="mb-8">
        <label className="block text-lg font-semibold text-white mb-2">
          Recurrence Type
        </label>
        <select
          value={recurrenceType}
          onChange={(e) => setRecurrenceType(e.target.value as 'daily' | 'weekly' | 'monthly' | 'yearly')}
          className="block w-full bg-white text-gray-900 border border-transparent rounded-full shadow-lg p-4 focus:ring-4 focus:ring-yellow-500 transition-all duration-300"
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </select>
      </div>

      {/* Interval Input */}
      <div className="mb-8">
        <label className="block text-lg font-semibold text-white mb-2">
          Repeat Every
        </label>
        <div className="flex items-center space-x-3">
          <input
            type="number"
            min="1"
            value={interval}
            onChange={(e) => setInterval(parseInt(e.target.value))}
            className="block w-1/4 bg-white text-gray-900 border border-transparent rounded-full shadow-lg p-4 focus:ring-4 focus:ring-yellow-500 transition-all duration-300"
          />
          <span className="text-white text-lg">
            {` ${recurrenceType === 'daily' ? 'days' : recurrenceType === 'weekly' ? 'weeks' : recurrenceType === 'monthly' ? 'months' : 'years'}`}
          </span>
        </div>
      </div>

      {/* Days of the Week (For Weekly Recurrence) */}
      {recurrenceType === 'weekly' && (
        <div className="mb-8">
          <label className="block text-lg font-semibold text-white mb-2">
            Select Days
          </label>
          <div className="flex justify-between">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
              <button
                key={day}
                onClick={() => handleDaysOfWeekToggle(day)}
                className={`w-12 h-12 rounded-full border-2 transition-all duration-300 ease-in-out transform ${
                  daysOfWeek.includes(day)
                    ? 'bg-yellow-500 text-white border-yellow-500 scale-110 shadow-lg'
                    : 'bg-white text-indigo-700 border-indigo-300 hover:bg-yellow-400 hover:text-white hover:border-yellow-400 hover:scale-105'
                } focus:outline-none focus:ring-4 focus:ring-yellow-500`}
              >
                {day[0]}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Save Button */}
      <div className="text-center">
        <button className="bg-yellow-500 text-indigo-900 font-bold py-4 px-8 rounded-full shadow-2xl hover:bg-yellow-600 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
          Save Settings
        </button>
      </div>
    </div>
  );
};

export default DatePicker;
