print "What is your favorite number?"
number = gets.chomp.to_i

if (number == 3) || (number == 5)
  puts "That's by favorite number!"
elsif (number > 10) && (number.even?)
  puts "That's a pretty high even number!"
end
