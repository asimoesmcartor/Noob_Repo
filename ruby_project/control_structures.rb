print "Enter name: "
name = gets.chomp

if name == "Alex"
  puts "That's my name too!"
else
  puts "Hit #{name}!"
end

print "Would you like to see your name backwards? (yes or no)"
answer = gets.chomp

if answer == "yes"
  puts "This is your name backwards:"
  puts name.reverse
else
  puts "Okay, maybe later."
end
