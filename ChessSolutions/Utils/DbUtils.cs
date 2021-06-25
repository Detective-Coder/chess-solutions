using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Data.SqlClient;

namespace ChessSolutions.Utils
{
    // a set of useful functions for interacting with ADO.NET
    public static class DbUtils
    {
        // get a string from a data reader object and gracefully handle NULL values
        public static string GetString(SqlDataReader reader, string column)
        {
            var ordinal = reader.GetOrdinal(column);
            if (reader.IsDBNull(ordinal))
            {
                return null;
            }
            return reader.GetString(ordinal);
        }

        // get an int from a data reader object
        public static int GetInt(SqlDataReader reader, string column)
        {
            return reader.GetInt32(reader.GetOrdinal(column));
        }

        // get a DateTime from a data reader object
        public static DateTime GetDateTime(SqlDataReader reader, string column)
        {
            return reader.GetDateTime(reader.GetOrdinal(column));
        }

        // get an int? (nullable int) from a data reader object and gracefully handle NULL values
        public static int? GetNullableInt(SqlDataReader reader, string column)
        {
            var ordinal = reader.GetOrdinal(column);
            if (reader.IsDBNull(ordinal))
            {
                return null;
            }
            return reader.GetInt32(ordinal);
        }

        // get a DateTime? (nullable DateTime) from a data reader object and gracefully handle NULL values
        public static DateTime? GetNullableDateTime(SqlDataReader reader, string column)
        {
            var ordinal = reader.GetOrdinal(column);
            if (reader.IsDBNull(ordinal))
            {
                return null;
            }
            return reader.GetDateTime(ordinal);
        }

        // get nullable string
        public static string GetNullableString(SqlDataReader reader, string column)
        {
            var ordinal = reader.GetOrdinal(column);
            if (reader.IsDBNull(ordinal))
            {
                return null;
            }
            return reader.GetString(ordinal);
        }

        // determine if the value of a given column is NULL
        public static bool IsDbNull(SqlDataReader reader, string column)
        {
            return reader.IsDBNull(reader.GetOrdinal(column));
        }

        // determine if the value of a given column is not NULL
        public static bool IsNotDbNull(SqlDataReader reader, string column)
        {
            return !IsDbNull(reader, column);
        }

        // add a parameter to the given SqlCommand object and gracefully handle null values
        public static void AddParameter(SqlCommand cmd, string name, object value)
        {
            if (value == null)
            {
                cmd.Parameters.AddWithValue(name, DBNull.Value);
            }
            else
            {
                cmd.Parameters.AddWithValue(name, value);
            }
        }

        // get a boolean
        public static bool GetBool(SqlDataReader reader, string column)
        {
            return reader.GetBoolean(reader.GetOrdinal(column));
        }
    }
}
