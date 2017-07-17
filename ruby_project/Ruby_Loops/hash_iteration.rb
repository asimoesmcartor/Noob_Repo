business = {"name" => "Treehouse", "location" => "Portland, OR"}

business.each do |key, value|
  puts "The hash key is #{key} and the value is #{value}."
end

business.each_key do |key|
  puts "Key: #{key}"
end

business.each_value do |value|
  puts "Value: #{value}."
end
