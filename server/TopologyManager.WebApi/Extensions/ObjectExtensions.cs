using System.Configuration;

namespace System
{
    public static class ObjectExtensions
    {
        public static void ThrowIfNull<T>(this T obj, string parameterName)
               where T : class
        {
            if (obj == null) throw new ArgumentNullException(parameterName);
        }

        /// <summary>
        /// Throws an NullArgument exception if obj is null
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="obj"></param>
        /// <param name="message"></param>
        /// <param name="parameterName"></param>
        public static void ThrowIfNull<T>(this T obj, string message, string parameterName)
               where T : class
        {
            if (obj == null) throw new ArgumentNullException(message, parameterName);
        }

        public static bool IsNull<T>(this T obj)
              where T : class
        {
            return (obj == null);
        }

        /// <summary>
        ///
        /// </summary>
        /// <param name="value"></param>
        /// <returns></returns>
        public static bool IsNullOrEmpty(this string value)
        {
            return string.IsNullOrEmpty(value);
        }

        /// <summary>
        /// return configuration value
        /// </summary>
        /// <param name="key"></param>
        /// <returns></returns>
        public static string GetConfigurationValue(this string key)
        {
            string setting = ConfigurationManager.AppSettings[key];
            if (!setting.IsNullOrEmpty())
                return setting;

            return string.Empty;
        }
    }
}