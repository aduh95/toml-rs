var searchIndex = JSON.parse('{\
"toml":{"doc":"A TOML-parsing library","i":[[3,"Spanned","toml","A spanned value, indicating the range at which it is…",null,null],[0,"map","","A map of String to toml::Value.",null,null],[3,"Map","toml::map","Represents a TOML key/value type.",null,null],[3,"VacantEntry","","A vacant Entry. It is part of the `Entry` enum.",null,null],[3,"OccupiedEntry","","An occupied Entry. It is part of the `Entry` enum.",null,null],[3,"Iter","","An iterator over a toml::Map\'s entries.",null,null],[3,"IterMut","","A mutable iterator over a toml::Map\'s entries.",null,null],[3,"IntoIter","","An owning iterator over a toml::Map\'s entries.",null,null],[3,"Keys","","An iterator over a toml::Map\'s keys.",null,null],[3,"Values","","An iterator over a toml::Map\'s values.",null,null],[4,"Entry","","A view into a single entry in a map, which may either be…",null,null],[13,"Vacant","","A vacant Entry.",0,null],[13,"Occupied","","An occupied Entry.",0,null],[11,"new","","Makes a new empty Map.",1,[[]]],[11,"with_capacity","","Makes a new empty Map with the given initial capacity.",1,[[]]],[11,"clear","","Clears the map, removing all values.",1,[[]]],[11,"get","","Returns a reference to the value corresponding to the key.",1,[[],[["option",4],["value",4]]]],[11,"contains_key","","Returns true if the map contains a value for the specified…",1,[[]]],[11,"get_mut","","Returns a mutable reference to the value corresponding to…",1,[[],[["value",4],["option",4]]]],[11,"insert","","Inserts a key-value pair into the map.",1,[[["string",3],["value",4]],[["option",4],["value",4]]]],[11,"remove","","Removes a key from the map, returning the value at the key…",1,[[],[["option",4],["value",4]]]],[11,"entry","","Gets the given key\'s corresponding entry in the map for…",1,[[],["entry",4]]],[11,"len","","Returns the number of elements in the map.",1,[[]]],[11,"is_empty","","Returns true if the map contains no elements.",1,[[]]],[11,"iter","","Gets an iterator over the entries of the map.",1,[[],["iter",3]]],[11,"iter_mut","","Gets a mutable iterator over the entries of the map.",1,[[],["itermut",3]]],[11,"keys","","Gets an iterator over the keys of the map.",1,[[],["keys",3]]],[11,"values","","Gets an iterator over the values of the map.",1,[[],["values",3]]],[11,"key","","Returns a reference to this entry\'s key.",0,[[],["string",3]]],[11,"or_insert","","Ensures a value is in the entry by inserting the default…",0,[[["value",4]],["value",4]]],[11,"or_insert_with","","Ensures a value is in the entry by inserting the result of…",0,[[],["value",4]]],[11,"key","","Gets a reference to the key that would be used when…",2,[[],["string",3]]],[11,"insert","","Sets the value of the entry with the VacantEntry\'s key,…",2,[[["value",4]],["value",4]]],[11,"key","","Gets a reference to the key in the entry.",3,[[],["string",3]]],[11,"get","","Gets a reference to the value in the entry.",3,[[],["value",4]]],[11,"get_mut","","Gets a mutable reference to the value in the entry.",3,[[],["value",4]]],[11,"into_mut","","Converts the entry into a mutable reference to its value.",3,[[],["value",4]]],[11,"insert","","Sets the value of the entry with the `OccupiedEntry`\'s…",3,[[["value",4]],["value",4]]],[11,"remove","","Takes the value of the entry out of the map, and returns it.",3,[[],["value",4]]],[0,"value","toml","Definition of a TOML value",null,null],[3,"Datetime","toml::value","A parsed TOML datetime value",null,null],[3,"DatetimeParseError","","Error returned from parsing a `Datetime` in the `FromStr`…",null,null],[4,"Value","","Representation of a TOML value.",null,null],[13,"String","","Represents a TOML string",4,null],[13,"Integer","","Represents a TOML integer",4,null],[13,"Float","","Represents a TOML float",4,null],[13,"Boolean","","Represents a TOML boolean",4,null],[13,"Datetime","","Represents a TOML datetime",4,null],[13,"Array","","Represents a TOML array",4,null],[13,"Table","","Represents a TOML table",4,null],[6,"Array","","Type representing a TOML array, payload of the…",null,null],[6,"Table","","Type representing a TOML table, payload of the…",null,null],[8,"Index","","Types that can be used to index a `toml::Value`",null,null],[11,"try_from","","Convert a `T` into `toml::Value` which is an enum that can…",4,[[],[["result",4],["error",4],["value",4]]]],[11,"try_into","","Interpret a `toml::Value` as an instance of type `T`.",4,[[],[["result",4],["error",3]]]],[11,"get","","Index into a TOML array or map. A string index can be used…",4,[[["index",8]],[["option",4],["value",4]]]],[11,"get_mut","","Mutably index into a TOML array or map. A string index can…",4,[[["index",8]],[["value",4],["option",4]]]],[11,"as_integer","","Extracts the integer value if it is an integer.",4,[[],["option",4]]],[11,"is_integer","","Tests whether this value is an integer.",4,[[]]],[11,"as_float","","Extracts the float value if it is a float.",4,[[],["option",4]]],[11,"is_float","","Tests whether this value is a float.",4,[[]]],[11,"as_bool","","Extracts the boolean value if it is a boolean.",4,[[],["option",4]]],[11,"is_bool","","Tests whether this value is a boolean.",4,[[]]],[11,"as_str","","Extracts the string of this value if it is a string.",4,[[],["option",4]]],[11,"is_str","","Tests if this value is a string.",4,[[]]],[11,"as_datetime","","Extracts the datetime value if it is a datetime.",4,[[],[["option",4],["datetime",3]]]],[11,"is_datetime","","Tests whether this value is a datetime.",4,[[]]],[11,"as_array","","Extracts the array value if it is an array.",4,[[],[["vec",3],["option",4]]]],[11,"as_array_mut","","Extracts the array value if it is an array.",4,[[],[["vec",3],["option",4]]]],[11,"is_array","","Tests whether this value is an array.",4,[[]]],[11,"as_table","","Extracts the table value if it is a table.",4,[[],[["option",4],["table",6]]]],[11,"as_table_mut","","Extracts the table value if it is a table.",4,[[],[["option",4],["table",6]]]],[11,"is_table","","Tests whether this value is a table.",4,[[]]],[11,"same_type","","Tests whether this and another value have the same type.",4,[[["value",4]]]],[11,"type_str","","Returns a human-readable representation of the type of…",4,[[]]],[0,"ser","toml","Serializing Rust structures into TOML.",null,null],[3,"Serializer","toml::ser","Serialization implementation for TOML.",null,null],[4,"Error","","Errors that can occur when serializing a type.",null,null],[13,"UnsupportedType","","Indicates that a Rust type was requested to be serialized…",5,null],[13,"KeyNotString","","The key of all TOML maps must be strings, but…",5,null],[13,"ValueAfterTable","","All values in a TOML table must be emitted before further…",5,null],[13,"DateInvalid","","A serialized date was invalid.",5,null],[13,"NumberInvalid","","A serialized number was invalid.",5,null],[13,"UnsupportedNone","","None was attempted to be serialized, but it\'s not supported.",5,null],[13,"Custom","","A custom error which could be generated when serializing a…",5,null],[5,"to_vec","","Serialize the given data structure as a TOML byte vector.",null,[[],[["vec",3],["error",4],["result",4]]]],[5,"to_string","","Serialize the given data structure as a String of TOML.",null,[[],[["error",4],["result",4],["string",3]]]],[5,"to_string_pretty","","Serialize the given data structure as a \\\"pretty\\\" String of…",null,[[],[["error",4],["result",4],["string",3]]]],[5,"tables_last","","Convenience function to serialize items in a map in an…",null,[[],["result",4]]],[11,"new","","Creates a new serializer which will emit TOML into the…",6,[[["string",3]],["serializer",3]]],[11,"pretty","","Instantiate a \\\"pretty\\\" formatter",6,[[["string",3]],["serializer",3]]],[11,"pretty_string","","Enable or Disable pretty strings",6,[[]]],[11,"pretty_string_literal","","Enable or Disable Literal strings for pretty strings",6,[[]]],[11,"pretty_array","","Enable or Disable pretty arrays",6,[[]]],[11,"pretty_array_indent","","Set the indent for pretty arrays",6,[[]]],[11,"pretty_array_trailing_comma","","Specify whether to use a trailing comma when serializing…",6,[[]]],[0,"de","toml","Deserializing TOML into Rust structures.",null,null],[3,"Error","toml::de","Errors that can occur when deserializing a type.",null,null],[3,"Deserializer","","Deserialization implementation for TOML.",null,null],[5,"from_slice","","Deserializes a byte slice into a type.",null,[[],[["result",4],["error",3]]]],[5,"from_str","","Deserializes a string into a type.",null,[[],[["result",4],["error",3]]]],[11,"new","","Creates a new deserializer which will be deserializing the…",7,[[],["deserializer",3]]],[11,"end","","The `Deserializer::end` method should be called after a…",7,[[],[["result",4],["error",3]]]],[11,"set_require_newline_after_table","","Historical versions of toml-rs accidentally allowed a…",7,[[]]],[11,"set_allow_duplicate_after_longer_table","","Historical versions of toml-rs accidentally allowed a…",7,[[]]],[11,"line_col","","Produces a (line, column) pair of the position of the…",8,[[],["option",4]]],[11,"start","toml","Access the start of the span of the contained value.",9,[[]]],[11,"end","","Access the end of the span of the contained value.",9,[[]]],[11,"span","","Get the span of the contained value.",9,[[]]],[11,"into_inner","","Consumes the spanned value and returns the contained value.",9,[[]]],[11,"get_ref","","Returns a reference to the contained value.",9,[[]]],[11,"get_mut","","Returns a mutable reference to the contained value.",9,[[]]],[14,"toml","","Construct a `toml::Value` from TOML syntax.",null,null],[11,"from","","",9,[[]]],[11,"into","","",9,[[]]],[11,"to_owned","","",9,[[]]],[11,"clone_into","","",9,[[]]],[11,"borrow","","",9,[[]]],[11,"borrow_mut","","",9,[[]]],[11,"try_from","","",9,[[],["result",4]]],[11,"try_into","","",9,[[],["result",4]]],[11,"type_id","","",9,[[],["typeid",3]]],[11,"equivalent","","",9,[[]]],[11,"from","toml::map","",1,[[]]],[11,"into","","",1,[[]]],[11,"into_iter","","",1,[[]]],[11,"to_owned","","",1,[[]]],[11,"clone_into","","",1,[[]]],[11,"borrow","","",1,[[]]],[11,"borrow_mut","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"try_into","","",1,[[],["result",4]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"from","","",2,[[]]],[11,"into","","",2,[[]]],[11,"borrow","","",2,[[]]],[11,"borrow_mut","","",2,[[]]],[11,"try_from","","",2,[[],["result",4]]],[11,"try_into","","",2,[[],["result",4]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"from","","",3,[[]]],[11,"into","","",3,[[]]],[11,"borrow","","",3,[[]]],[11,"borrow_mut","","",3,[[]]],[11,"try_from","","",3,[[],["result",4]]],[11,"try_into","","",3,[[],["result",4]]],[11,"type_id","","",3,[[],["typeid",3]]],[11,"from","","",10,[[]]],[11,"into","","",10,[[]]],[11,"into_iter","","",10,[[]]],[11,"borrow","","",10,[[]]],[11,"borrow_mut","","",10,[[]]],[11,"try_from","","",10,[[],["result",4]]],[11,"try_into","","",10,[[],["result",4]]],[11,"type_id","","",10,[[],["typeid",3]]],[11,"from","","",11,[[]]],[11,"into","","",11,[[]]],[11,"into_iter","","",11,[[]]],[11,"borrow","","",11,[[]]],[11,"borrow_mut","","",11,[[]]],[11,"try_from","","",11,[[],["result",4]]],[11,"try_into","","",11,[[],["result",4]]],[11,"type_id","","",11,[[],["typeid",3]]],[11,"from","","",12,[[]]],[11,"into","","",12,[[]]],[11,"into_iter","","",12,[[]]],[11,"borrow","","",12,[[]]],[11,"borrow_mut","","",12,[[]]],[11,"try_from","","",12,[[],["result",4]]],[11,"try_into","","",12,[[],["result",4]]],[11,"type_id","","",12,[[],["typeid",3]]],[11,"from","","",13,[[]]],[11,"into","","",13,[[]]],[11,"into_iter","","",13,[[]]],[11,"borrow","","",13,[[]]],[11,"borrow_mut","","",13,[[]]],[11,"try_from","","",13,[[],["result",4]]],[11,"try_into","","",13,[[],["result",4]]],[11,"type_id","","",13,[[],["typeid",3]]],[11,"from","","",14,[[]]],[11,"into","","",14,[[]]],[11,"into_iter","","",14,[[]]],[11,"borrow","","",14,[[]]],[11,"borrow_mut","","",14,[[]]],[11,"try_from","","",14,[[],["result",4]]],[11,"try_into","","",14,[[],["result",4]]],[11,"type_id","","",14,[[],["typeid",3]]],[11,"from","","",0,[[]]],[11,"into","","",0,[[]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"from","toml::value","",15,[[]]],[11,"into","","",15,[[]]],[11,"to_owned","","",15,[[]]],[11,"clone_into","","",15,[[]]],[11,"to_string","","",15,[[],["string",3]]],[11,"borrow","","",15,[[]]],[11,"borrow_mut","","",15,[[]]],[11,"try_from","","",15,[[],["result",4]]],[11,"try_into","","",15,[[],["result",4]]],[11,"type_id","","",15,[[],["typeid",3]]],[11,"from","","",16,[[]]],[11,"into","","",16,[[]]],[11,"to_owned","","",16,[[]]],[11,"clone_into","","",16,[[]]],[11,"to_string","","",16,[[],["string",3]]],[11,"borrow","","",16,[[]]],[11,"borrow_mut","","",16,[[]]],[11,"try_from","","",16,[[],["result",4]]],[11,"try_into","","",16,[[],["result",4]]],[11,"type_id","","",16,[[],["typeid",3]]],[11,"from","","",4,[[]]],[11,"into","","",4,[[]]],[11,"to_owned","","",4,[[]]],[11,"clone_into","","",4,[[]]],[11,"to_string","","",4,[[],["string",3]]],[11,"borrow","","",4,[[]]],[11,"borrow_mut","","",4,[[]]],[11,"try_from","","",4,[[],["result",4]]],[11,"try_into","","",4,[[],["result",4]]],[11,"type_id","","",4,[[],["typeid",3]]],[11,"from","toml::ser","",6,[[]]],[11,"into","","",6,[[]]],[11,"borrow","","",6,[[]]],[11,"borrow_mut","","",6,[[]]],[11,"try_from","","",6,[[],["result",4]]],[11,"try_into","","",6,[[],["result",4]]],[11,"type_id","","",6,[[],["typeid",3]]],[11,"from","","",5,[[]]],[11,"into","","",5,[[]]],[11,"to_owned","","",5,[[]]],[11,"clone_into","","",5,[[]]],[11,"to_string","","",5,[[],["string",3]]],[11,"borrow","","",5,[[]]],[11,"borrow_mut","","",5,[[]]],[11,"try_from","","",5,[[],["result",4]]],[11,"try_into","","",5,[[],["result",4]]],[11,"type_id","","",5,[[],["typeid",3]]],[11,"equivalent","","",5,[[]]],[11,"from","toml::de","",8,[[]]],[11,"into","","",8,[[]]],[11,"to_owned","","",8,[[]]],[11,"clone_into","","",8,[[]]],[11,"to_string","","",8,[[],["string",3]]],[11,"borrow","","",8,[[]]],[11,"borrow_mut","","",8,[[]]],[11,"try_from","","",8,[[],["result",4]]],[11,"try_into","","",8,[[],["result",4]]],[11,"type_id","","",8,[[],["typeid",3]]],[11,"equivalent","","",8,[[]]],[11,"from","","",7,[[]]],[11,"into","","",7,[[]]],[11,"borrow","","",7,[[]]],[11,"borrow_mut","","",7,[[]]],[11,"try_from","","",7,[[],["result",4]]],[11,"try_into","","",7,[[],["result",4]]],[11,"type_id","","",7,[[],["typeid",3]]],[11,"from","toml::value","",4,[[],["value",4]]],[11,"from","","",4,[[["vec",3]],["value",4]]],[11,"from","","",4,[[["btreemap",3]],["value",4]]],[11,"from","","",4,[[["hashmap",3]],["value",4]]],[11,"from","","",4,[[["string",3]],["value",4]]],[11,"from","","",4,[[],["value",4]]],[11,"from","","",4,[[],["value",4]]],[11,"from","","",4,[[],["value",4]]],[11,"from","","",4,[[],["value",4]]],[11,"from","","",4,[[],["value",4]]],[11,"from","","",4,[[],["value",4]]],[11,"from","","",4,[[],["value",4]]],[11,"from","","",4,[[],["value",4]]],[11,"from","","",4,[[["datetime",3]],["value",4]]],[11,"from","","",4,[[["table",6]],["value",4]]],[11,"next_back","toml::map","",10,[[],["option",4]]],[11,"next_back","","",11,[[],["option",4]]],[11,"next_back","","",12,[[],["option",4]]],[11,"next_back","","",13,[[],["option",4]]],[11,"next_back","","",14,[[],["option",4]]],[11,"len","","",10,[[]]],[11,"len","","",11,[[]]],[11,"len","","",12,[[]]],[11,"len","","",13,[[]]],[11,"len","","",14,[[]]],[11,"extend","","",1,[[]]],[11,"into_iter","","",1,[[]]],[11,"next","","",10,[[],["option",4]]],[11,"size_hint","","",10,[[]]],[11,"next","","",11,[[],["option",4]]],[11,"size_hint","","",11,[[]]],[11,"next","","",12,[[],["option",4]]],[11,"size_hint","","",12,[[]]],[11,"next","","",13,[[],["option",4]]],[11,"size_hint","","",13,[[]]],[11,"next","","",14,[[],["option",4]]],[11,"size_hint","","",14,[[]]],[11,"clone","","",1,[[]]],[11,"clone","toml::value","",4,[[],["value",4]]],[11,"clone","","",15,[[],["datetime",3]]],[11,"clone","","",16,[[],["datetimeparseerror",3]]],[11,"clone","toml::ser","",5,[[],["error",4]]],[11,"clone","toml::de","",8,[[],["error",3]]],[11,"clone","toml","",9,[[],["spanned",3]]],[11,"default","toml::map","",1,[[]]],[11,"cmp","toml","",9,[[],["ordering",4]]],[11,"eq","toml::map","",1,[[]]],[11,"eq","toml::value","",4,[[["value",4]]]],[11,"ne","","",4,[[["value",4]]]],[11,"eq","","",15,[[["datetime",3]]]],[11,"ne","","",15,[[["datetime",3]]]],[11,"eq","toml::ser","",5,[[["error",4]]]],[11,"ne","","",5,[[["error",4]]]],[11,"eq","toml::de","",8,[[["error",3]]]],[11,"ne","","",8,[[["error",3]]]],[11,"eq","toml","",9,[[]]],[11,"partial_cmp","","",9,[[],[["option",4],["ordering",4]]]],[11,"fmt","toml::map","",1,[[["formatter",3]],[["result",4],["error",3]]]],[11,"fmt","toml::value","",4,[[["formatter",3]],["result",6]]],[11,"fmt","","",16,[[["formatter",3]],["result",6]]],[11,"fmt","","",15,[[["formatter",3]],["result",6]]],[11,"fmt","toml::ser","",5,[[["formatter",3]],["result",6]]],[11,"fmt","toml::de","",8,[[["formatter",3]],["result",6]]],[11,"fmt","toml","",9,[[["formatter",3]],["result",6]]],[11,"fmt","toml::value","",4,[[["formatter",3]],["result",6]]],[11,"fmt","","",15,[[["formatter",3]],["result",6]]],[11,"fmt","","",16,[[["formatter",3]],["result",6]]],[11,"fmt","toml::ser","",5,[[["formatter",3]],["result",6]]],[11,"fmt","toml::de","",8,[[["formatter",3]],["result",6]]],[11,"index","toml::map","",1,[[],["value",4]]],[11,"index","toml::value","",4,[[],["value",4]]],[11,"index_mut","toml::map","",1,[[],["value",4]]],[11,"index_mut","toml::value","",4,[[],["value",4]]],[11,"hash","toml","",9,[[]]],[11,"borrow","","",9,[[]]],[11,"from_str","toml::value","",4,[[],[["result",4],["value",4]]]],[11,"from_str","","",15,[[],[["datetime",3],["result",4],["datetimeparseerror",3]]]],[11,"from_iter","toml::map","",1,[[]]],[11,"deserialize_any","toml::value","",4,[[],[["error",3],["result",4]]]],[11,"deserialize_enum","","",4,[[],[["error",3],["result",4]]]],[11,"deserialize_option","","",4,[[],[["error",3],["result",4]]]],[11,"deserialize_newtype_struct","","",4,[[],[["error",3],["result",4]]]],[11,"deserialize_bool","","",4,[[],["result",4]]],[11,"deserialize_u8","","",4,[[],["result",4]]],[11,"deserialize_u16","","",4,[[],["result",4]]],[11,"deserialize_u32","","",4,[[],["result",4]]],[11,"deserialize_u64","","",4,[[],["result",4]]],[11,"deserialize_i8","","",4,[[],["result",4]]],[11,"deserialize_i16","","",4,[[],["result",4]]],[11,"deserialize_i32","","",4,[[],["result",4]]],[11,"deserialize_i64","","",4,[[],["result",4]]],[11,"deserialize_f32","","",4,[[],["result",4]]],[11,"deserialize_f64","","",4,[[],["result",4]]],[11,"deserialize_char","","",4,[[],["result",4]]],[11,"deserialize_str","","",4,[[],["result",4]]],[11,"deserialize_string","","",4,[[],["result",4]]],[11,"deserialize_unit","","",4,[[],["result",4]]],[11,"deserialize_seq","","",4,[[],["result",4]]],[11,"deserialize_bytes","","",4,[[],["result",4]]],[11,"deserialize_byte_buf","","",4,[[],["result",4]]],[11,"deserialize_map","","",4,[[],["result",4]]],[11,"deserialize_unit_struct","","",4,[[],["result",4]]],[11,"deserialize_tuple_struct","","",4,[[],["result",4]]],[11,"deserialize_struct","","",4,[[],["result",4]]],[11,"deserialize_tuple","","",4,[[],["result",4]]],[11,"deserialize_ignored_any","","",4,[[],["result",4]]],[11,"deserialize_identifier","","",4,[[],["result",4]]],[11,"into_deserializer","","",4,[[]]],[11,"custom","toml::ser","",5,[[["display",8]],["error",4]]],[11,"serialize","toml::map","",1,[[],["result",4]]],[11,"serialize","toml::value","",4,[[],["result",4]]],[11,"serialize","","",15,[[],["result",4]]],[11,"serialize","toml","",9,[[],["result",4]]],[11,"deserialize","toml::map","",1,[[],["result",4]]],[11,"deserialize","toml::value","",4,[[],[["result",4],["value",4]]]],[11,"deserialize","","",15,[[],[["datetime",3],["result",4]]]],[11,"deserialize","toml","",9,[[],[["result",4],["spanned",3]]]],[11,"custom","toml::de","",8,[[["display",8]],["error",3]]]],"p":[[4,"Entry"],[3,"Map"],[3,"VacantEntry"],[3,"OccupiedEntry"],[4,"Value"],[4,"Error"],[3,"Serializer"],[3,"Deserializer"],[3,"Error"],[3,"Spanned"],[3,"Iter"],[3,"IterMut"],[3,"IntoIter"],[3,"Keys"],[3,"Values"],[3,"Datetime"],[3,"DatetimeParseError"]]}\
}');
addSearchOptions(searchIndex);initSearch(searchIndex);