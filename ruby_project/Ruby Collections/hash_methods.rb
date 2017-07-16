hash = {
  "item" => "Bread",
  "quantity" => 1,
  "brand" => "Treehouse Bread Company"
}

puts "Hash: #{hash.inspect}"

print "hash.length: "
puts hash.length

print "hash.invert: "
puts hash.invert

print "hash.shift: "
puts has.shift.inspect
print "hash: "
puts hash.inspect

hash["item"] = "Bread"

puts "Hash merging: "

print "Original hash: "
puts hash.inspect

print "Merged with {'calories' => 100}"
puts hash.merge({ 'calories' => 100 })

print "Original hash: "
puts hash.inspect
