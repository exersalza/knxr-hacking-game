--[[ 
    NUI Callbacks / Events

    RegisterNUICallback('CALLBACK_NAME', function(_, cb)
        local name = "test"
        cb({name = name})
    end)


    Style guidlines:
        1. Use tab spaces for indentation.
        2. Use camelCase for variable and function names.
        3. Use UPPER_CASE for constants.
        4. Use a single space after commas and around operators.
        5. Use short, descriptive variable and function names.
        6. Use double quotes for string literals.
        7. Use MACRO_CASE for NUI callbacks.
        8. Use MACRO_CASE for NUI events.
        
        
    
    Naming conventions:
        PI = 3.14159
        MAX_WIDTH = 800
    
        function getArea(width, height)
            return width * height
        end  
]]